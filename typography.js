export function applyCase(text,mode='title'){
  if(mode==='upper')return text.toLocaleUpperCase('es');
  if(mode==='lower')return text.toLocaleLowerCase('es');
  if(mode==='title')return text.toLocaleLowerCase('es').replace(/\p{L}[\p{L}\p{M}]*/gu,word=>word.charAt(0).toLocaleUpperCase('es')+word.slice(1));
  return text;
}

export function subtitleText(level,theme='',solution=false,mode='title'){
  return applyCase([`Nivel ${level}`,theme,solution?'Solución':''].filter(Boolean).join(' · '),mode);
}
