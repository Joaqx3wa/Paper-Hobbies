// Names and National Pokédex numbers: https://www.pokemon.com/pokedex/
// Clues are original descriptions, not copied Pokédex entries.
const kanto=`
BULBASAUR|Inicial de Kanto que lleva un bulbo vegetal sobre el lomo
IVYSAUR|Evolución de Bulbasaur con un capullo aún sin abrir
VENUSAUR|Evolución final de Bulbasaur con una gran flor en la espalda
CHARMANDER|Inicial de Kanto con una llama en la punta de la cola
CHARMELEON|Evolución de Charmander anterior a Charizard
CHARIZARD|Evolución final de Charmander, con alas y cola llameante
SQUIRTLE|Inicial acuático de Kanto con aspecto de pequeña tortuga
WARTORTLE|Evolución de Squirtle con orejas y cola de aspecto plumoso
BLASTOISE|Evolución final de Squirtle con cañones en el caparazón
CATERPIE|Pokémon oruga verde que evoluciona en Metapod
METAPOD|Capullo de Caterpie anterior a Butterfree
BUTTERFREE|Evolución de Metapod con aspecto de mariposa
WEEDLE|Pequeña larva de Kanto con un aguijón sobre la cabeza
KAKUNA|Estado de capullo de Weedle anterior a Beedrill
BEEDRILL|Evolución de Kakuna con grandes aguijones en sus brazos
PIDGEY|Pequeña ave de Kanto que inicia la línea de Pidgeot
PIDGEOTTO|Evolución intermedia entre Pidgey y Pidgeot
PIDGEOT|Evolución final de Pidgey, con larga cresta de plumas
RATTATA|Pequeño roedor morado en su forma original de Kanto
RATICATE|Evolución de Rattata de grandes incisivos
SPEAROW|Pequeña ave de Kanto que evoluciona en Fearow
FEAROW|Evolución de Spearow, de cuello y pico muy largos
EKANS|Serpiente morada de Kanto que evoluciona en Arbok
ARBOK|Evolución de Ekans que despliega un dibujo en su capucha
PIKACHU|Pokémon amarillo de mejillas eléctricas y cola en forma de rayo
RAICHU|Evolución de Pikachu mediante una Piedra Trueno
SANDSHREW|Pokémon de Kanto que se enrolla y tiene aspecto de armadillo
SANDSLASH|Evolución de Sandshrew con grandes púas en el lomo
NIDORAN|Pokémon cuyas variantes hembra y macho ocupan números nacionales distintos
NIDORINA|Evolución de Nidoran hembra anterior a Nidoqueen
NIDOQUEEN|Evolución final de la línea femenina de Nidoran
NIDORINO|Evolución de Nidoran macho anterior a Nidoking
NIDOKING|Evolución final de la línea masculina de Nidoran
CLEFAIRY|Pokémon rosado que evoluciona en Clefable con una Piedra Lunar
CLEFABLE|Evolución de Clefairy, de cuerpo rosado y alas pequeñas
VULPIX|Zorro de Kanto que tiene seis colas en su forma original
NINETALES|Evolución de Vulpix con nueve colas
JIGGLYPUFF|Pokémon rosado que puede dormir a otros con su canto
WIGGLYTUFF|Evolución de Jigglypuff mediante una Piedra Lunar
ZUBAT|Murciélago de Kanto que no tiene ojos visibles
GOLBAT|Evolución de Zubat conocida por su enorme boca
ODDISH|Pequeño Pokémon de cuerpo azul y hojas sobre la cabeza
GLOOM|Evolución de Oddish anterior a Vileplume
VILEPLUME|Evolución de Gloom con una enorme flor sobre la cabeza
PARAS|Pokémon de Kanto con dos hongos sobre el lomo
PARASECT|Evolución de Paras dominada por un gran hongo
VENONAT|Pokémon de aspecto peludo y grandes ojos rojos que evoluciona en Venomoth
VENOMOTH|Evolución de Venonat con aspecto de polilla
DIGLETT|Pequeño Pokémon excavador del que suele verse la cabeza
DUGTRIO|Evolución de Diglett representada por tres cabezas
MEOWTH|Pokémon felino con una moneda en la frente
PERSIAN|Evolución de Meowth con una gema en la frente
PSYDUCK|Pokémon de aspecto de pato que se lleva las patas a la cabeza
GOLDUCK|Evolución azul de Psyduck con una gema roja en la frente
MANKEY|Pokémon de aspecto de mono y temperamento irritable
PRIMEAPE|Evolución de Mankey de pelaje claro y carácter furioso
GROWLITHE|Pokémon canino de Kanto que evoluciona con una Piedra Fuego
ARCANINE|Gran Pokémon canino que evoluciona de Growlithe
POLIWAG|Pokémon renacuajo con una espiral visible en el vientre
POLIWHIRL|Evolución de Poliwag anterior a Poliwrath o Politoed
POLIWRATH|Evolución de Poliwhirl mediante una Piedra Agua
ABRA|Pokémon psíquico de Kanto conocido por usar Teletransporte
KADABRA|Evolución de Abra que sostiene una cuchara
ALAKAZAM|Evolución de Kadabra representada con dos cucharas
MACHOP|Primer Pokémon de la línea evolutiva de Machamp
MACHOKE|Evolución intermedia entre Machop y Machamp
MACHAMP|Pokémon musculoso de cuatro brazos
BELLSPROUT|Pokémon de cuerpo vegetal y cabeza semejante a una campana
WEEPINBELL|Evolución intermedia entre Bellsprout y Victreebel
VICTREEBEL|Evolución final de Bellsprout con aspecto de planta carnívora
TENTACOOL|Pokémon marino de Kanto con tentáculos y dos gemas rojas
TENTACRUEL|Evolución de Tentacool con numerosos tentáculos
GEODUDE|Pokémon rocoso representado con dos brazos y sin piernas visibles
GRAVELER|Evolución de Geodude anterior a Golem
GOLEM|Evolución final de Geodude protegida por una cubierta rocosa
PONYTA|Pokémon de Kanto con aspecto de potro y crin de fuego
RAPIDASH|Evolución de Ponyta con un cuerno sobre la frente
SLOWPOKE|Pokémon rosado que evoluciona en Slowbro o Slowking
SLOWBRO|Evolución de Slowpoke con un Shellder sujeto a la cola
MAGNEMITE|Pokémon metálico flotante con un ojo central y dos imanes
MAGNETON|Evolución formada por tres Magnemite unidos
FARFETCHD|Ave de Kanto que lleva un tallo vegetal como herramienta
DODUO|Ave no voladora de Kanto con dos cabezas
DODRIO|Evolución de Doduo con tres cabezas
SEEL|Pokémon de Kanto con aspecto de foca blanca y un pequeño cuerno
DEWGONG|Evolución de Seel, de color blanco y cola con aletas
GRIMER|Pokémon formado por lodo morado en su aspecto original
MUK|Evolución de Grimer, de cuerpo grande y viscoso
SHELLDER|Pokémon bivalvo morado que muestra una lengua rosada
CLOYSTER|Evolución de Shellder con caparazón puntiagudo
GASTLY|Pokémon fantasmal de Kanto rodeado por una nube gaseosa
HAUNTER|Evolución de Gastly con manos separadas de su cuerpo
GENGAR|Evolución final de Gastly, de cuerpo morado y gran sonrisa
ONIX|Pokémon serpiente formado por grandes segmentos de roca
DROWZEE|Pokémon de Kanto de aspecto de tapir que evoluciona en Hypno
HYPNO|Evolución de Drowzee que utiliza un péndulo
KRABBY|Pokémon de aspecto de cangrejo que evoluciona en Kingler
KINGLER|Evolución de Krabby con una pinza desproporcionadamente grande
VOLTORB|Pokémon esférico de Kanto con aspecto de Poké Ball
ELECTRODE|Evolución de Voltorb que invierte la distribución de sus colores
EXEGGCUTE|Pokémon de Kanto representado como un grupo de seis huevos
EXEGGUTOR|Evolución de Exeggcute con forma de palmera en su versión original
CUBONE|Pokémon que lleva un cráneo como casco y un hueso como herramienta
MAROWAK|Evolución de Cubone que combate con un hueso
HITMONLEE|Pokémon de Kanto especializado en patadas y piernas extensibles
HITMONCHAN|Pokémon de Kanto representado con guantes de boxeo
LICKITUNG|Pokémon rosado de Kanto con una lengua muy larga
KOFFING|Pokémon esférico morado que libera gases y evoluciona en Weezing
WEEZING|Evolución de Koffing con dos cuerpos gaseosos conectados
RHYHORN|Pokémon de Kanto con aspecto de rinoceronte cubierto de roca
RHYDON|Evolución bípeda de Rhyhorn con un cuerno sobre el hocico
CHANSEY|Pokémon rosado que lleva un huevo en una bolsa frontal
TANGELA|Pokémon de Kanto cubierto por una maraña de lianas azules
KANGASKHAN|Pokémon de aspecto marsupial que lleva a una cría en su bolsa
HORSEA|Pokémon de Kanto con aspecto de caballito de mar azul
SEADRA|Evolución de Horsea anterior a Kingdra
GOLDEEN|Pez de Kanto con un cuerno sobre la cabeza y aletas vistosas
SEAKING|Evolución de Goldeen con cuerpo anaranjado y manchas oscuras
STARYU|Pokémon estrella de cinco brazos y gema central roja
STARMIE|Evolución de Staryu con dos formas estrelladas superpuestas
MRMIME|Pokémon de Kanto de aspecto de mimo que crea barreras
SCYTHER|Pokémon verde de Kanto con brazos en forma de guadaña
JYNX|Pokémon de Kanto de pelo largo rubio y vestido rojizo
ELECTABUZZ|Pokémon eléctrico de Kanto con marcas negras sobre el cuerpo amarillo
MAGMAR|Pokémon de fuego de Kanto con cabeza de contorno llameante
PINSIR|Pokémon de Kanto con dos grandes cuernos dentados sobre la cabeza
TAUROS|Pokémon de Kanto con aspecto de toro y tres colas
MAGIKARP|Pez de Kanto que evoluciona en Gyarados
GYARADOS|Evolución de Magikarp de gran cuerpo serpentino
LAPRAS|Pokémon acuático con largo cuello y caparazón donde puede llevar pasajeros
DITTO|Pokémon de cuerpo maleable conocido por usar Transformación
EEVEE|Pokémon de múltiples evoluciones, entre ellas Vaporeon y Flareon
VAPOREON|Evolución de Eevee mediante una Piedra Agua
JOLTEON|Evolución de Eevee mediante una Piedra Trueno
FLAREON|Evolución de Eevee mediante una Piedra Fuego
PORYGON|Pokémon artificial de Kanto con aspecto geométrico
OMANYTE|Pokémon fósil de Kanto de concha espiral que evoluciona en Omastar
OMASTAR|Evolución de Omanyte con tentáculos y concha espiral
KABUTO|Pokémon fósil de Kanto de caparazón abombado que evoluciona en Kabutops
KABUTOPS|Evolución de Kabuto con extremidades en forma de cuchillas
AERODACTYL|Pokémon fósil alado de Kanto, inspirado en un reptil volador
SNORLAX|Pokémon de gran tamaño asociado al sueño y al apetito
ARTICUNO|Ave legendaria de Kanto asociada al hielo
ZAPDOS|Ave legendaria de Kanto asociada a la electricidad
MOLTRES|Ave legendaria de Kanto asociada al fuego
DRATINI|Primer Pokémon de la línea evolutiva de Dragonite
DRAGONAIR|Evolución intermedia entre Dratini y Dragonite
DRAGONITE|Evolución final de Dratini, de cuerpo anaranjado y alas pequeñas
MEWTWO|Pokémon legendario de Kanto creado mediante investigación genética a partir de Mew
MEW|Pokémon singular rosado de Kanto, de larga cola delgada
`;
const later=`
CHIKORITA|Inicial de Johto de tipo Planta, con una hoja sobre la cabeza
CYNDAQUIL|Inicial de Johto de tipo Fuego que enciende llamas en el lomo
TOTODILE|Inicial de Johto de tipo Agua, de aspecto de pequeño cocodrilo
TOGEPI|Pokémon de Johto que permanece parcialmente dentro de un huevo
TOGETIC|Evolución de Togepi anterior a Togekiss
MAREEP|Pokémon ovino eléctrico de Johto
AMPHAROS|Evolución final de Mareep
MARILL|Pokémon azul de Johto con una esfera en el extremo de la cola
AZUMARILL|Evolución de Marill de largas orejas
SUDOWOODO|Pokémon de Johto que imita la forma de un árbol, pero es de tipo Roca
ESPEON|Evolución psíquica de Eevee
UMBREON|Evolución siniestra de Eevee, de cuerpo oscuro y anillos amarillos
WOOPER|Pokémon acuático de Johto con branquias externas en su forma original
QUAGSIRE|Evolución de Wooper en su forma de Johto
WOBBUFFET|Pokémon azul conocido por devolver ataques y proteger su cola negra
HERACROSS|Pokémon de Johto inspirado en un escarabajo con un gran cuerno
SNEASEL|Pokémon de Johto de garras afiladas y aspecto de comadreja
TEDDIURSA|Pokémon osezno de Johto con una marca de luna en la frente
URSARING|Evolución de Teddiursa con un anillo dibujado en el vientre
SWINUB|Pokémon de Johto de cuerpo pequeño cubierto de pelo y hocico rosado
HOUNDOUR|Pokémon canino de Johto, de tipo Siniestro y Fuego
HOUNDOOM|Evolución de Houndour, con cuernos y cola de punta triangular
PHANPY|Pokémon elefante pequeño de Johto
DONPHAN|Evolución de Phanpy que puede enrollarse para rodar
SMEARGLE|Pokémon que utiliza la punta de su cola como pincel
MILTANK|Pokémon bovino rosado asociado a la producción de leche
BLISSEY|Evolución de Chansey, conocida por sus labores de cuidado
RAIKOU|Pokémon legendario de Johto asociado al trueno
ENTEI|Pokémon legendario de Johto asociado a los volcanes
SUICUNE|Pokémon legendario de Johto asociado al agua y a su purificación
LUGIA|Pokémon legendario de Johto de gran cuerpo blanco y alas como manos
HOOH|Ave legendaria de Johto vinculada a un arcoíris
CELEBI|Pokémon singular de Johto relacionado con viajes en el tiempo
TREECKO|Inicial de Hoenn de tipo Planta, con aspecto de geco
TORCHIC|Inicial de Hoenn de tipo Fuego, con aspecto de polluelo
MUDKIP|Inicial de Hoenn de tipo Agua, con una aleta sobre la cabeza
RALTS|Pokémon de Hoenn que inicia la línea evolutiva de Gardevoir
GARDEVOIR|Evolución de Kirlia de aspecto elegante, de tipo Psíquico y Hada
SABLEYE|Pokémon de Hoenn cuyos ojos tienen aspecto de gemas
MAWILE|Pokémon de Hoenn con una gran mandíbula que surge detrás de la cabeza
ARON|Pequeño Pokémon de Hoenn con una armadura metálica
AGGRON|Evolución final de Aron, de cuerpo acorazado
FLYGON|Evolución final de Trapinch, conocida por su aspecto de dragón alado
ALTARIA|Evolución de Swablu con alas de aspecto algodonoso
ABSOL|Pokémon de Hoenn que se asocia a la detección de desastres
SPHEAL|Pokémon esférico de Hoenn inspirado en una foca
BAGON|Pokémon de Hoenn que inicia la línea evolutiva de Salamence
SALAMENCE|Evolución final de Bagon, con alas rojas
BELDUM|Pokémon de Hoenn que evoluciona en Metang
METAGROSS|Evolución final de Beldum, con cuatro patas y una cruz en el rostro
KYOGRE|Pokémon legendario de Hoenn asociado al océano
GROUDON|Pokémon legendario de Hoenn asociado a la tierra firme
RAYQUAZA|Pokémon legendario verde y serpentino asociado al cielo
TURTWIG|Inicial de Sinnoh de tipo Planta, con aspecto de pequeña tortuga
CHIMCHAR|Inicial de Sinnoh de tipo Fuego, con aspecto de mono
PIPLUP|Inicial de Sinnoh de tipo Agua, con aspecto de pingüino
LUCARIO|Evolución de Riolu, de tipo Lucha y Acero, vinculada al aura
GARCHOMP|Evolución final de Gible, de tipo Dragón y Tierra
ROTOM|Pokémon capaz de ocupar distintos aparatos eléctricos
DIALGA|Pokémon legendario de Sinnoh relacionado con el tiempo
PALKIA|Pokémon legendario de Sinnoh relacionado con el espacio
GIRATINA|Pokémon legendario de Sinnoh asociado al Mundo Distorsión
ARCEUS|Pokémon singular asociado al origen del universo en la mitología de Sinnoh
SNIVY|Inicial de Unova de tipo Planta, de aspecto reptiliano
TEPIG|Inicial de Unova de tipo Fuego, con aspecto de cerdito
OSHAWOTT|Inicial de Unova de tipo Agua que lleva una concha en el vientre
ZORUA|Pokémon de Unova con aspecto de zorro, asociado a las ilusiones
ZOROARK|Evolución de Zorua, conocida por sus ilusiones
LITWICK|Pokémon de Unova con aspecto de vela
CHANDELURE|Evolución final de Litwick con aspecto de lámpara colgante
AXEW|Pokémon de Unova que inicia la línea evolutiva de Haxorus
HAXORUS|Evolución final de Axew, con grandes colmillos en forma de hacha
RESHIRAM|Pokémon legendario blanco de Unova, de tipo Dragón y Fuego
ZEKROM|Pokémon legendario negro de Unova, de tipo Dragón y Eléctrico
CHESPIN|Inicial de Kalos de tipo Planta, con una cubierta verde sobre la cabeza
FENNEKIN|Inicial de Kalos de tipo Fuego, con aspecto de zorro
FROAKIE|Inicial de Kalos de tipo Agua, con aspecto de rana
GRENINJA|Evolución final de Froakie, de aspecto de ninja
SYLVEON|Evolución de Eevee de tipo Hada, con apéndices semejantes a cintas
GOOMY|Pequeño Pokémon de Kalos de tipo Dragón y cuerpo viscoso
MIMIKYU|Pokémon de Alola que se oculta bajo un disfraz parecido a Pikachu
ROWLET|Inicial de Alola de tipo Planta y Volador, con aspecto de búho
LITTEN|Inicial de Alola de tipo Fuego, con aspecto de gato
POPPLIO|Inicial de Alola de tipo Agua, con aspecto de lobo marino
ROCKRUFF|Pokémon canino de Alola que evoluciona en Lycanroc
GROOKEY|Inicial de Galar de tipo Planta que lleva una pequeña baqueta
SCORBUNNY|Inicial de Galar de tipo Fuego, con aspecto de conejo
SOBBLE|Inicial de Galar de tipo Agua, conocido por su aspecto tímido
WOOLOO|Pokémon ovino de Galar, de cuerpo redondeado cubierto de lana
YAMPER|Pokémon canino eléctrico de Galar inspirado en un corgi
SPRIGATITO|Inicial de Paldea de tipo Planta, con aspecto de gato
FUECOCO|Inicial de Paldea de tipo Fuego, con aspecto de pequeño cocodrilo
QUAXLY|Inicial de Paldea de tipo Agua, con aspecto de patito
LECHONK|Pokémon porcino de Paldea que evoluciona en Oinkologne
PAWMI|Pequeño Pokémon eléctrico de Paldea, con mejillas y patas delanteras destacadas
`;
export const POKEMON_DATA=kanto.trim()+'\n'+later.trim();
