import {applyCase,subtitleText} from './typography.js';
import {GAMES,LEVELS,themeLabel} from './engine.js';

const BORDER_WIDTH=4;

export function renderPage(item,solution=false,scale=2){
  const canvas=document.createElement('canvas');
  canvas.width=1240*scale;
  canvas.height=1754*scale;
  const ctx=canvas.getContext('2d');
  ctx.scale(scale,scale);
  paintPage(ctx,item,solution);
  return canvas;
}

// Draw in logical A4 coordinates so imposed pages can render directly on the sheet.
export function paintPage(c,item,solution=false){
  const p=item.puzzle,s=item.style||{},ink=s.ink||'#30332e',paper=s.paper||'#fffdf6',font=s.font||'serif';
  c.fillStyle=paper;c.fillRect(0,0,1240,1754);c.fillStyle=ink;c.strokeStyle=ink;
  const text=(value,x,y,size=30,align='left',weight='normal')=>{c.font=`${weight} ${size}px ${font}`;c.textAlign=align;c.fillText(value,x,y);};
  const line=(x,y,x2,y2,width=1)=>{c.beginPath();c.lineWidth=width;c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();};
  function wrappedLines(value,width,size){c.font=`${size}px ${font}`;let rows=[],row='';for(const word of value.split(' ')){if(row&&c.measureText(row+' '+word).width>width){rows.push(row);row=word;}else row+=(row?' ':'')+word;}if(row)rows.push(row);return rows;}
  function wrap(value,x,y,width,size){const rows=wrappedLines(value,width,size);rows.forEach((row,i)=>text(row,x,y+i*size*1.28,size));return y+rows.length*size*1.28;}
  const bodyTop=340;
  const centeredY=height=>bodyTop+(1630-bodyTop-height)/2;
  const name=GAMES.find(g=>g[0]===p.type)[2],heading=applyCase(item.title||name+' #1',s.titleCase||'title'),weight=s.titleBold?'bold':'normal';
  let titleSize=82;c.font=`${weight} ${titleSize}px ${font}`;
  while(c.measureText(heading).width>1040&&titleSize>28){titleSize--;c.font=`${weight} ${titleSize}px ${font}`;}
  text(heading,620,165,titleSize,'center',weight);
  const topic=['crossword','words'].includes(p.type)?(themeLabel(p.theme)||'Temas variados'):'';
  const subtitle=subtitleText(LEVELS[item.level],topic,solution,s.subtitleCase||'title');
  let subtitleSize=46;c.font=`${subtitleSize}px ${font}`;
  while(c.measureText(subtitle).width>1040&&subtitleSize>40){subtitleSize--;c.font=`${subtitleSize}px ${font}`;}
  c.textAlign='center';
  c.fillText(subtitle,620,250,1040);
  line(100,300,1140,300);
  const bodyHeight=1630-bodyTop;

  if(p.type==='sudoku'){
    const size=112,x=(1240-9*size)/2,y=centeredY(9*size);
    for(let r=0;r<=9;r++)line(x,y+r*size,x+9*size,y+r*size,r%3===0?BORDER_WIDTH:1);
    for(let col=0;col<=9;col++)line(x+col*size,y,x+col*size,y+9*size,col%3===0?BORDER_WIDTH:1);
    for(let i=0;i<81;i++){const v=(solution?p.answer:p.grid)[i];if(v){c.globalAlpha=solution&&!p.grid[i] ? .9 : 1;text(v,x+(i%9+.5)*size,y+((i/9|0)+.69)*size,55,'center',p.grid[i]?'bold':'normal');c.globalAlpha=1;}}
  }
  if(p.type==='maze'){
    const size=1040/p.n,x=100,y=centeredY(1040),n=p.n;
    for(let i=0;i<n*n;i++){
      const r=i/n|0,col=i%n;
      if(p.walls[i][0])line(x+col*size,y+r*size,x+(col+1)*size,y+r*size,BORDER_WIDTH);
      if(p.walls[i][3])line(x+col*size,y+r*size,x+col*size,y+(r+1)*size,BORDER_WIDTH);
      if(r===n-1&&p.walls[i][2])line(x+col*size,y+(r+1)*size,x+(col+1)*size,y+(r+1)*size,BORDER_WIDTH);
      if(col===n-1&&p.walls[i][1])line(x+(col+1)*size,y+r*size,x+(col+1)*size,y+(r+1)*size,BORDER_WIDTH);
    }
    for(const [cx,top] of [[x+size/2,y-52],[x+1040-size/2,y+1040+16]]){
      c.save();
      c.lineCap='round';
      c.lineJoin='round';
      c.lineWidth=7;
      c.beginPath();
      c.moveTo(cx,top);
      c.lineTo(cx,top+34);
      c.moveTo(cx-12,top+22);
      c.lineTo(cx,top+34);
      c.lineTo(cx+12,top+22);
      c.stroke();
      c.restore();
    }
    if(solution){c.save();c.globalAlpha=.45;c.lineWidth=size*.25;c.lineCap='round';c.lineJoin='round';c.beginPath();p.path.forEach((i,k)=>{const px=x+(i%n+.5)*size,py=y+((i/n|0)+.5)*size;k?c.lineTo(px,py):c.moveTo(px,py);});c.stroke();c.restore();}
  }
  if(p.type==='words'){
    const bilingual=p.placements.some(word=>word.translation),rowHeight=bilingual?72:43,wordRows=Math.ceil(p.placements.length/3),gridSize=Math.min(1000,bodyHeight-100-wordRows*rowHeight),size=gridSize/p.n,x=(1240-gridSize)/2,y=centeredY(gridSize+100+wordRows*rowHeight);
    if(solution){c.save();c.globalAlpha=.2;c.lineCap='round';p.placements.forEach(w=>{const a=w.cells[0],b=w.cells.at(-1);line(x+(a[1]+.5)*size,y+(a[0]+.5)*size,x+(b[1]+.5)*size+.01,y+(b[0]+.5)*size+.01,size*.72);});c.restore();}
    p.grid.forEach((ch,i)=>text(ch,x+(i%p.n+.5)*size,y+((i/p.n|0)+.69)*size,size*.52,'center'));
    line(x-15,y+gridSize+16,x+gridSize+15,y+gridSize+16);
    text(bilingual?'PALABRAS EN INGLÉS · TRADUCCIÓN AL ESPAÑOL':'PALABRAS POR ENCONTRAR',620,y+gridSize+68,25,'center');
    p.placements.forEach((w,i)=>{const xx=140+(i%3)*340,yy=y+gridSize+115+(i/3|0)*rowHeight;let wordSize=bilingual?28:30;c.font=wordSize+'px '+font;while(c.measureText(w.label||w.word).width>310&&wordSize>21){wordSize--;c.font=wordSize+'px '+font;}text(w.label||w.word,xx,yy,wordSize);if(w.translation){let translationSize=23;c.font=translationSize+'px '+font;while(c.measureText(w.translation).width>310&&translationSize>17){translationSize--;c.font=translationSize+'px '+font;}text(w.translation,xx,yy+28,translationSize);}});
  }
  if(p.type==='crossword'){
    const columnHeight=(dir,size)=>60+p.entries.filter(e=>e.dir===dir).reduce((height,e)=>height+wrappedLines(`${e.number}. ${e.clue}`,495,size).length*size*1.28+15,0);
    let clueSize=33;
    while(clueSize>27&&Math.max(columnHeight(0,clueSize),columnHeight(1,clueSize))>570)clueSize--;
    const cluesHeight=Math.max(columnHeight(0,clueSize),columnHeight(1,clueSize));
    const size=Math.min(90,1020/p.cols,Math.min(850,bodyHeight-cluesHeight-75)/p.rows),width=p.cols*size,height=p.rows*size,x=(1240-width)/2,y=centeredY(height+75+cluesHeight);
    p.grid.forEach((ch,i)=>{const px=x+i%p.cols*size,py=y+(i/p.cols|0)*size;if(!ch){c.globalAlpha=.87;c.fillRect(px,py,size,size);c.globalAlpha=1;}else{c.lineWidth=1;c.strokeRect(px,py,size,size);if(p.numbers[i]){c.save();c.globalAlpha=.25;c.textBaseline='middle';text(p.numbers[i],px+size*.5,py+size*.53,size*(p.numbers[i]<10?.88:.67),'center','bold');c.restore();}if(solution)text(ch,px+size*.5,py+size*.76,size*.54,'center');}});
    const clueY=y+height+75;line(100,clueY-38,1140,clueY-38);
    for(let dir=0;dir<2;dir++){const xx=100+dir*535;let yy=clueY;text(dir?'Verticales':'Horizontales',xx,yy,37);yy+=55;for(const e of p.entries.filter(e=>e.dir===dir))yy=wrap(`${e.number}. ${e.clue}`,xx,yy,495,clueSize)+15;}
  }
  if(p.type==='kakuro'){
    const size=Math.min(1040/p.cols,1150/p.rows),x=(1240-p.cols*size)/2,y=centeredY(p.rows*size),clues=new Map();
    p.runs.forEach(run=>{if(!clues.has(run.clue))clues.set(run.clue,{});clues.get(run.clue)[run.dir?'down':'right']=run.sum;});
    for(let i=0;i<p.mask.length;i++){
      const xx=x+(i%p.cols)*size,yy=y+(i/p.cols|0)*size;
      if(!p.mask[i]){c.fillRect(xx,yy,size,size);const clue=clues.get(i);if(clue){c.save();c.strokeStyle=paper;c.fillStyle=paper;line(xx,yy,xx+size,yy+size,1.4);if(clue.down)text(clue.down,xx+size*.27,yy+size*.83,size*.27,'center');if(clue.right)text(clue.right,xx+size*.73,yy+size*.34,size*.27,'center');c.restore();}}
      else{const value=(solution?p.answer:p.givens)[i];if(value)text(value,xx+size*.5,yy+size*.69,size*.46,'center',p.givens[i]?'bold':'normal');}
      c.save();c.strokeStyle=p.mask[i]?ink:paper;c.lineWidth=1;c.strokeRect(xx,yy,size,size);c.restore();
    }
  }
}
