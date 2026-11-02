# Paper Hobbies

Generador de pasatiempos en español con estética de papel. Sitio estático compatible con GitHub Pages; los juegos se crean en tu navegador.

## Incluye

- Sudoku con solución única, laberintos, sopas de letras con palabras propias, crucigramas conectados con pistas numeradas, nonogramas/Hanjie con solución única y Kakuro con sumas y ayudas que garantizan una solución única.
- Tres dificultades por juego. La dificultad cambia el tamaño, las ayudas, las direcciones permitidas o las pistas; no representa una clasificación profesional de técnicas de resolución.
- Título, tinta, papel y tipografía personalizables.
- PNG en proporción A4, PDF con tamaño físico A4 y soluciones separadas de las hojas de juego.
- Colecciones de hasta 24 juegos, reordenables y guardadas en el almacenamiento local del navegador.
- PDF A6 en orden de lectura o impuesto en hojas A5 horizontales para doblar y engrapar. Cada juego tiene su solución en el reverso. También se puede dejar el reverso en blanco o imprimir juegos consecutivos sin soluciones.

Los nonogramas generan patrones abstractos. Los crucigramas usan un banco local de vocabulario y pistas para Naturaleza, Vida cotidiana y Ciencia y cultura. El Kakuro usa una cuadrícula compacta de tramos cruzados, con dígitos iniciales cuando son necesarios para asegurar unicidad.

## Imprimir cuadernillos

1. Añade juegos individuales o genera un paquete mixto.
2. Elige «Su solución» en el reverso y «Cuadernillo A6 · imprimir en A5».
3. Descarga el PDF. Se añaden páginas en blanco cuando hacen falta para completar múltiplos de cuatro.
4. Imprime en A5 horizontal, tamaño real / 100 %, una página del PDF por cara, doble cara y volteo por el borde corto. **No actives otra imposición de folleto en el lector PDF.**
5. Haz una prueba de una hoja para comprobar la alimentación de tu impresora. Apila, dobla por el centro y engrapa.

El PDF se genera íntegramente en el navegador con páginas de imagen de alta resolución; las fuentes y los caracteres quedan incorporados visualmente. No necesita servicios externos de conversión. Las fuentes de la interfaz se cargan desde Google Fonts con alternativas locales; la generación y las descargas siguen funcionando sin ellas.

## Desarrollo y validación

Requiere Node.js 22 o posterior, sin dependencias adicionales.

```sh
npm test
npm start
```

Abre http://127.0.0.1:4173. Las pruebas verifican unicidad, restricciones de los juegos, conexiones de los crucigramas, recorridos de laberintos y correspondencia de frentes y reversos después de imponer las páginas.

## GitHub Pages

El flujo `.github/workflows/pages.yml` comprueba los generadores y publica los archivos estáticos al actualizar `main`. En Settings → Pages, selecciona **GitHub Actions** como origen si el repositorio aún no tiene Pages habilitado.

URL esperada: https://joaqx3wa.github.io/Paper-Hobbies/
