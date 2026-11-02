export const DEFAULT_COLORS=['#30332e','#a85438','#626f52','#416d84'];
export const validColor=value=>/^#[a-f0-9]{6}$/i.test(value);
export function savedPalette(values){const colors=[...new Set((Array.isArray(values)?values:[]).filter(validColor).map(s=>s.toLowerCase()))].slice(0,4);return colors.length?colors:DEFAULT_COLORS.slice();}
export function confirmPalette(colors,color){if(!validColor(color))throw Error('Color inválido.');colors=savedPalette(colors);color=color.toLowerCase();if(!colors.includes(color)){if(colors.length<4)colors.push(color);else colors[3]=color;}return {colors,selected:color};}
