import {crc32} from './zip.js';

export async function printPng(canvas,widthMm,heightMm){
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob)throw Error('No se pudo crear la imagen.');
  const png=new Uint8Array(await blob.arrayBuffer());
  const source=new DataView(png.buffer);

  // pHYs stores the intended print size as pixels per metre on both axes.
  const density=new Uint8Array(21);
  const chunk=new DataView(density.buffer);
  chunk.setUint32(0,9);
  density.set([112,72,89,115],4);
  chunk.setUint32(8,Math.round(canvas.width*1000/widthMm));
  chunk.setUint32(12,Math.round(canvas.height*1000/heightMm));
  density[16]=1;
  chunk.setUint32(17,crc32(density.subarray(4,17)));

  const parts=[png.subarray(0,8)];
  for(let start=8;start<png.length;){
    const end=start+12+source.getUint32(start);
    const type=source.getUint32(start+4);
    if(type!==0x70485973)parts.push(png.subarray(start,end)); // pHYs
    if(type===0x49484452)parts.push(density); // IHDR
    start=end;
  }
  return new Blob(parts,{type:'image/png'});
}
