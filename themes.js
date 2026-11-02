import {POKEMON_EXPANDED} from './pokemon-expanded.js';
import {MARVEL_HEROES,MARVEL_VILLAINS,DC_HEROES,DC_VILLAINS,OTHER_HEROES,GAME_DATA} from './pop-culture.js';
import {CELEBRATION_DATA} from './celebrations.js';
import {COUNTRY_PAIRS} from './countries.js';
import {ENGLISH_DATA,ENGLISH_LABELS} from './english.js';
import {WORD_DATA} from './vocabulary.js';
import {EXTRA_WORD_DATA} from './vocabulary-extra.js';
import {POKEMON_DATA} from './pokemon.js';
export const THEME_LABELS={
  general:'Todos los temas',naturaleza:'Naturaleza y paisajes',mamiferos:'Animales mamíferos',aves:'Aves',marinos:'Animales marinos',reptiles:'Reptiles y anfibios',insectos:'Insectos y pequeños invertebrados',plantas:'Plantas, flores y árboles',frutas:'Frutas, verduras y legumbres',alimentos:'Comidas, bebidas y especias',cotidiano:'Cosas de la casa',cocina:'Utensilios de cocina',ropa:'Ropa y accesorios',escuela:'Escuela y oficina',ciencia:'Ciencias',espacio:'Espacio y astronomía',tecnologia:'Tecnología e informática',cuerpo:'Cuerpo humano',deportes:'Deportes',musica:'Música e instrumentos',arte:'Arte y técnicas',profesiones:'Oficios y profesiones',transportes:'Medios de transporte',geografia:'Geografía',pokemon:'Pokémon'
};
const normalize=word=>word.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Z0-9]/g,'');

const parse=data=>data.trim().split('\n').map(line=>{const [word,clue,hard]=line.split('|');return [normalize(word),clue?.trim(),clue?.trim(),hard?.trim()||clue?.trim()];}).filter(entry=>entry[0].length>=3&&entry[0].length<=18&&entry[1]);
const countries=COUNTRY_PAIRS.trim().split('\n').map(line=>line.split('|'));
const giftWords=new Set(['REGALO','ROSA','RAMO','FLOR','CHOCOLATE','BOMBON','PELUCHE','TARJETA','CARTA','POEMA','VERSO','DEDICATORIA','MENSAJE','CANCION']);
const giftData=CELEBRATION_DATA.sanvalentin.split('\n').filter(line=>giftWords.has(normalize(line.split('|')[0]))).join('\n');
const spanish={...WORD_DATA,...EXTRA_WORD_DATA,pokemon:POKEMON_DATA,...CELEBRATION_DATA,
  videojuegos:GAME_DATA,marvel:MARVEL_HEROES+'\n'+MARVEL_VILLAINS,dc:DC_HEROES+'\n'+DC_VILLAINS,superheroes:MARVEL_HEROES+'\n'+DC_HEROES+'\n'+OTHER_HEROES,
  diamadre:CELEBRATION_DATA.familia+'\n'+giftData,diapadre:CELEBRATION_DATA.familia+'\n'+giftData,
  maestro:CELEBRATION_DATA.maestro+'\n'+EXTRA_WORD_DATA.escuela,
  festividades:Object.values(CELEBRATION_DATA).join('\n'),
  paises:countries.map(([country,capital])=>country+'|País cuya capital es '+capital+'.').join('\n'),
  capitales:countries.map(([country,capital])=>capital+'|Capital de '+country+'.').join('\n')
};
Object.assign(THEME_LABELS,{videojuegos:'Videojuegos y personajes',marvel:'Marvel · Personajes',dc:'DC · Personajes',superheroes:'Superhéroes',halloween:'Halloween',navidad:'Navidad',maestro:'Día del Maestro',cumpleanos:'Cumpleaños',sanvalentin:'San Valentín · Amor y amistad',carnaval:'Carnaval',pascua:'Pascua y Semana Santa',anionuevo:'Año Nuevo',familia:'Familia',diamadre:'Día de la Madre',diapadre:'Día del Padre',festividades:'Festividades y celebraciones',paises:'Países',capitales:'Capitales del mundo',...ENGLISH_LABELS});
export const isEnglishTheme=id=>Object.hasOwn(ENGLISH_LABELS,id);
export const EXPANDED_BANK=Object.fromEntries(Object.entries(spanish).map(([id,data])=>[id,parse(data)]));
const curated=new Map(EXPANDED_BANK.pokemon.filter(entry=>entry[0]!=='NIDORAN').map(entry=>[entry[0],entry]));
POKEMON_EXPANDED.forEach(entry=>{if(!curated.has(entry[0]))curated.set(entry[0],entry);});EXPANDED_BANK.pokemon=[...curated.values()];
for(const [id,data] of Object.entries(ENGLISH_DATA))EXPANDED_BANK[id]=data.trim().split('\n').map(line=>{const [word,translation]=line.split('|'),answer=normalize(word),clue='En inglés: '+translation?.trim()+'.';return [answer,clue,clue,clue,translation?.trim(),word?.trim().toUpperCase()];}).filter(entry=>entry[0].length>=3&&entry[0].length<=18&&entry[4]);
EXPANDED_BANK.ingles_general=[...new Map(Object.keys(ENGLISH_DATA).flatMap(id=>EXPANDED_BANK[id]).map(entry=>[entry[0],entry])).values()];
