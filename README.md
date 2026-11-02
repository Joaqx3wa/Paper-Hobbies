# Paper Hobbies

Generador de pasatiempos en español, con estética de papel y exportación para imprimir. Sitio estático publicado en https://joaqx3wa.github.io/Paper-Hobbies/.

## Juegos y personalización

- Sudoku, laberintos, sopas de letras, crucigramas y Kakuro.
- Niveles Fácil, Intermedio y Difícil; cambian las ayudas, los tamaños, las direcciones o las pistas según el juego.
- Kakuro con patrones irregulares y conectados, casillas negras interiores, tramos de distintas longitudes, sumas calculadas y solución única. Incluye dígitos de ayuda cuando son necesarios para asegurar unicidad.
- Sudokus de solución única y crucigramas conectados con pistas numeradas, sin mostrar la cantidad de letras.
- Títulos automáticos por tipo, como «Crucigrama #1», seguidos del nivel. Las hojas no incluyen instrucciones, descripciones ni pies de página.
- Color de papel y tipografía. La tinta se aplica al confirmar el selector RGB. Se guardan hasta cuatro opciones; un color nuevo reemplaza la última, conservando las primeras tres.
- La zona principal se ajusta a una pantalla de escritorio; el armado de cuadernillos queda debajo.

Los crucigramas usan vocabulario y pistas locales para Naturaleza, Vida cotidiana y Ciencia y cultura. Las sopas admiten palabras propias. No se necesitan cuentas ni servicios de generación externos.

## Descargas

- PNG de 2480 × 3508 píxeles en proporción A4. Si se incluye solución, se descargan dos imágenes dentro de un ZIP.
- PDF A4 individual: el juego y su solución están en páginas consecutivas.
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
