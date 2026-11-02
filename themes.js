import {WORD_DATA} from './vocabulary.js';
import {EXTRA_WORD_DATA} from './vocabulary-extra.js';
import {POKEMON_DATA} from './pokemon.js';
export const THEME_LABELS={
  general:'Todos los temas',naturaleza:'Naturaleza y paisajes',mamiferos:'Animales mamíferos',aves:'Aves',marinos:'Animales marinos',reptiles:'Reptiles y anfibios',insectos:'Insectos y pequeños invertebrados',plantas:'Plantas, flores y árboles',frutas:'Frutas, verduras y legumbres',alimentos:'Comidas, bebidas y especias',cotidiano:'Cosas de la casa',cocina:'Utensilios de cocina',ropa:'Ropa y accesorios',escuela:'Escuela y oficina',ciencia:'Ciencias',espacio:'Espacio y astronomía',tecnologia:'Tecnología e informática',cuerpo:'Cuerpo humano',deportes:'Deportes',musica:'Música e instrumentos',arte:'Arte y técnicas',profesiones:'Oficios y profesiones',transportes:'Medios de transporte',geografia:'Geografía',pokemon:'Pokémon'
};
const normalize=word=>word.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Z]/g,'');
export const EXPANDED_BANK=Object.fromEntries(Object.entries({...WORD_DATA,...EXTRA_WORD_DATA,pokemon:POKEMON_DATA}).map(([theme,data])=>[theme,data.trim().split('\n').map(line=>{const [word,clue,hard]=line.split('|');return [normalize(word),clue?.trim(),clue?.trim(),hard?.trim()||clue?.trim()];}).filter(entry=>entry[0].length>=3&&entry[0].length<=18&&entry[1])]));
