# Paper Hobbies

Generador de pasatiempos en español, con estética de papel y exportación para imprimir. Sitio estático publicado en https://joaqx3wa.github.io/Paper-Hobbies/.

## Juegos y personalización

- Sudoku, laberintos, sopas de letras, crucigramas y Kakuro.
- Laberintos con bifurcaciones, múltiples callejones y desvíos profundos a lo largo de la ruta correcta.
- Niveles Fácil, Intermedio y Difícil; cambian las ayudas, los tamaños, las direcciones o las pistas según el juego.
- Kakuro con patrones irregulares y conectados, casillas negras interiores, tramos de distintas longitudes, sumas calculadas y solución única. Incluye dígitos de ayuda cuando son necesarios para asegurar unicidad.
- Sudokus de solución única y crucigramas conectados con pistas numeradas, sin mostrar la cantidad de letras. Los números de inicio ocupan casi toda la casilla con un 25 % de opacidad; las letras de la solución se dibujan encima.
- Contenido de las hojas centrado, títulos y subtítulos más grandes y opción de título en negrita. Títulos automáticos por tipo, como «Crucigrama #1», seguidos del nivel. Los crucigramas y las sopas añaden el tema al subtítulo. Hay controles independientes AA, aa y Aa para título y subtítulo, que conservan tildes y números. Las hojas no incluyen instrucciones, descripciones ni pies de página.
- Color de papel y tipografía. La tinta se previsualiza en vivo al ajustar el selector RGB y se guarda al confirmar; cancelar o cerrar restaura el color anterior. Se guardan hasta cuatro opciones; un color nuevo reemplaza la última, conservando las primeras tres.
- La zona principal se ajusta a una pantalla de escritorio; el armado de cuadernillos queda debajo.

Crucigramas y sopas de letras comparten **4213 palabras distintas en 52 temas**, más las mezclas «Todos los temas» e «Inglés · Vocabulario variado». Las palabras tienen pistas propias para formar crucigramas y se reutilizan en las sopas. Se evita reutilizar las palabras del juego anterior del mismo tipo y tema; un historial reciente, guardado localmente, reduce las repeticiones posteriores. Las sopas admiten además palabras propias. Los temas están ordenados alfabéticamente. Los temas en inglés reúnen 770 palabras: las sopas muestran su traducción al español y los crucigramas usan respuestas en inglés con pistas en español. No se necesitan cuentas ni servicios de generación externos.

## Descargas

- PNG de 2480 × 3508 píxeles en proporción A4. Si se incluye solución, se descargan dos imágenes dentro de un ZIP.
- PDF A4 individual: el juego y su solución están en páginas consecutivas.
- Paquetes con cantidades independientes por dificultad (por ejemplo, 5 fáciles, 3 intermedios y 2 difíciles). El selector «Temática del paquete» permite elegir un tema o «Todas las temáticas», independientemente del editor individual. Se aplica a sopas y crucigramas; la elección se guarda en el navegador.
- Colecciones de hasta 24 juegos, reordenables y guardadas localmente en el navegador.
- PDF A4 o A6 en orden de lectura.
- Cuadernillo A6 impuesto sobre A5 o A4. Cada solución se encuentra al reverso de la página de su juego. También se puede dejar ese reverso en blanco o imprimir juegos consecutivos sin soluciones.
- Vista previa de cada cara física y detalle del orden de las páginas. Se añaden páginas en blanco hasta completar pliegos de cuatro páginas.

## Cuadernillos A6 en papel A4

1. Añade juegos y selecciona «Cuadernillo A6 · imprimir y cortar A4».
2. Imprime el PDF en **A4 vertical**, **tamaño real / 100 %**, una página del PDF por cara y doble cara con **volteo por el borde largo**. No actives una segunda imposición de folleto en el lector PDF.
3. Corta cada A4 por la mitad horizontal. Cada mitad es un pliego A5 con dos páginas A6 por cara. La pequeña diferencia dimensional entre dos medios A4 y dos A5 se absorbe en el margen de corte.
4. Ordena los pliegos A5 según la numeración indicada en la vista de impresión (primero el A5 1, después el A5 2, etc.). Dobla y engrapa por el centro.

El frente y el reverso de cada A4 conservan las mitades superior e inferior en el mismo lugar. El dúplex por el borde largo invierte izquierda y derecha, dejando cada solución al reverso de su juego después del corte.

## Cuadernillos A6 en papel A5

Selecciona «Cuadernillo A6 · imprimir en A5» e imprime en **A5 horizontal**, **tamaño real / 100 %**, doble cara y **volteo por el borde corto**. Apila, dobla y engrapa. No actives «folleto» en el lector PDF, pues el archivo ya está impuesto.

Haz una prueba con una hoja para comprobar la alimentación de tu impresora. Para muchas páginas, divide la colección en varios cuadernillos. Sin dúplex automático, utiliza la función de impresión manual a doble cara de tu lector PDF.

## Desarrollo y pruebas

Node.js 22 o posterior, sin dependencias adicionales:

```sh
npm test
npm start
```

Vista local: http://127.0.0.1:4173. Las pruebas verifican las restricciones y la unicidad de los juegos, la variedad de Kakuro, la imposición A5/A4 y el límite de cuatro colores.

El PDF se genera en el navegador con imágenes de alta resolución. Las fuentes de la interfaz se cargan desde Google Fonts con alternativas locales. La generación y las descargas funcionan sin ellas.

## Publicación

`.github/workflows/pages.yml` ejecuta las pruebas y publica los archivos estáticos al actualizar `main`. GitHub Pages debe usar GitHub Actions como origen.

## Banco de temas

- Animales mamíferos: 71 palabras.
- Animales marinos: 50 palabras.
- Año Nuevo: 42 palabras.
- Arte y técnicas: 60 palabras.
- Aves: 50 palabras.
- Capitales del mundo: 176 palabras.
- Carnaval: 44 palabras.
- Ciencias: 86 palabras.
- Comidas, bebidas y especias: 67 palabras.
- Cosas de la casa: 100 palabras.
- Cuerpo humano: 70 palabras.
- Cumpleaños: 50 palabras.
- DC · Personajes: 95 palabras.
- Deportes: 60 palabras.
- Día de la Madre: 63 palabras.
- Día del Maestro: 115 palabras.
- Día del Padre: 63 palabras.
- Escuela y oficina: 60 palabras.
- Espacio y astronomía: 50 palabras.
- Familia: 50 palabras.
- Festividades y celebraciones: 377 palabras.
- Frutas, verduras y legumbres: 68 palabras.
- Geografía: 60 palabras.
- Halloween: 57 palabras.
- Inglés · Adjetivos: 80 palabras.
- Inglés · Alimentos: 82 palabras.
- Inglés · Animales: 90 palabras.
- Inglés · Casa y familia: 80 palabras.
- Inglés · Cuerpo y salud: 65 palabras.
- Inglés · Escuela y oficina: 75 palabras.
- Inglés · Naturaleza y clima: 67 palabras.
- Inglés · Ropa, colores y formas: 65 palabras.
- Inglés · Verbos cotidianos: 100 palabras.
- Inglés · Viajes y ciudad: 75 palabras.
- Insectos y pequeños invertebrados: 45 palabras.
- Marvel · Personajes: 105 palabras.
- Medios de transporte: 60 palabras.
- Música e instrumentos: 60 palabras.
- Naturaleza y paisajes: 106 palabras.
- Navidad: 63 palabras.
- Oficios y profesiones: 65 palabras.
- Países: 173 palabras.
- Pascua y Semana Santa: 42 palabras.
- Plantas, flores y árboles: 62 palabras.
- Pokémon: 1025 palabras.
- Reptiles y anfibios: 40 palabras.
- Ropa y accesorios: 60 palabras.
- San Valentín · Amor y amistad: 46 palabras.
- Superhéroes: 165 palabras.
- Tecnología e informática: 67 palabras.
- Utensilios de cocina: 60 palabras.
- Videojuegos y personajes: 137 palabras.

Pokémon incluye 1025 especies de las generaciones I a IX. Los nombres y datos básicos proceden de [PokéAPI](https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv); las pistas son descripciones originales. Los datos se incluyen en el sitio y no requieren llamadas externas al generar juegos.
