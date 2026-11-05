// Minimal PDF 1.4 writer with lossless RGB image streams.
// Offsets are byte-counted (not string character offsets), so binary streams remain valid.
const enc=new TextEncoder();
function jpegBytes(canvas){return Uint8Array.from(atob(canvas.toDataURL('image/jpeg',.96).split(',')[1]),c=>c.charCodeAt(0));}
export function makePdf(pages,widthMm,heightMm){const w=widthMm*72/25.4,h=heightMm*72/25.4,parts=[],offsets=[0];let length=0;const push=v=>{let b=typeof v==='string'?enc.encode(v):v;parts.push(b);length+=b.length;};const obj=(id,body)=>{offsets[id]=length;push(`${id} 0 obj\n`);if(Array.isArray(body))body.forEach(push);else push(body);push('\nendobj\n');};push('%PDF-1.4\n%PaperHobbies\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,`<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_,i)=>`${3+i*3} 0 R`).join(' ')}] >>`);pages.forEach((page,i)=>{let id=3+i*3;const data=page.bytes,content=`q ${w.toFixed(5)} 0 0 ${h.toFixed(5)} 0 0 cm /Im0 Do Q\n`;obj(id,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w.toFixed(5)} ${h.toFixed(5)}] /Resources << /XObject << /Im0 ${id+1} 0 R >> >> /Contents ${id+2} 0 R >>`);obj(id+1,[`<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /${page.filter} /Length ${data.length} >>\nstream\n`,data,'\nendstream']);obj(id+2,`<< /Length ${enc.encode(content).length} >>\nstream\n${content}endstream`);});let xref=length,count=3+pages.length*3;push(`xref\n0 ${count}\n0000000000 65535 f \n`);for(let i=1;i<count;i++)push(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);push(`trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);return new Blob(parts,{type:'application/pdf'});}
export async function pageImage(canvas){
  const {width,height}=canvas;
  if(typeof CompressionStream==='undefined'){
    return {bytes:jpegBytes(canvas),width,height,filter:'DCTDecode'};
  }

  // Read a strip at a time to avoid allocating another full-size bitmap.
  const ctx=canvas.getContext('2d');
  let row=0;
  const pixels=new ReadableStream({
    pull(controller){
      const rows=Math.min(128,height-row);
      const rgba=ctx.getImageData(0,row,width,rows).data;
      if(row===0&&rgba[3]!==255)throw Error('No se pudo dibujar la página de impresión.');
      const rgb=new Uint8Array(width*rows*3);
      for(let src=0,dst=0;src<rgba.length;src+=4){
        rgb[dst++]=rgba[src];
        rgb[dst++]=rgba[src+1];
        rgb[dst++]=rgba[src+2];
      }
      controller.enqueue(rgb);
      row+=rows;
      if(row===height)controller.close();
    }
  });
  const compressed=pixels.pipeThrough(new CompressionStream('deflate'));
  const bytes=new Uint8Array(await new Response(compressed).arrayBuffer());
  return {bytes,width,height,filter:'FlateDecode'};
}
