# Plan para PWA personal de calorias y macros

## Decisiones confirmadas

- Formato: PWA instalable.
- Coste: gratis.
- App Store: no.
- Apple Developer Program: no.
- Apple Health: no.
- Apple Fitness: no.
- Backend: no.
- Login: no.
- Datos: locales en el dispositivo.
- Base nutricional: lista local curada en espanol de alimentos base.
- Objetivo: registrar comida rapido.

## Objetivo del MVP

Crear una app web que puedas instalar desde Safari en el iPhone y usar como si fuese una app sencilla.

Debe registrar:

- Alimento.
- Gramos.
- Nota opcional.

Debe calcular:

- Kcal.
- Proteina.
- Carbohidratos.
- Grasa.
- Nota opcional.

Debe mostrar:

- Totales del dia.
- Objetivo diario.
- Objetivo diario de proteina.
- Progreso diario.
- Historial del dia.

## Fase 1: PWA base

Estado: hecha.

Archivos:

- `web/index.html`
- `web/styles.css`
- `web/app.js`
- `web/manifest.webmanifest`
- `web/sw.js`
- `web/assets/icon.svg`

## Fase 2: Registro local

Estado: hecha.

Funcionalidad:

- Elegir alimento desde una base local.
- Buscar alimentos en la base local en espanol.
- Introducir gramos.
- Calcular kcal y macros automaticamente.
- Guardar entradas en `localStorage`.
- No depender de una API externa para buscar.
- Leer entradas al abrir.
- Calcular totales del dia.
- Borrar entradas.
- Borrar todo el dia.

## Fase 3: Instalacion

Estado: preparada.

Pasos:

1. Publicar la carpeta `web/` en una URL HTTPS gratuita.
2. Abrir la URL desde Safari en iPhone.
3. Usar `Anadir a pantalla de inicio`.

Opciones gratis:

- GitHub Pages.
- Netlify.
- Vercel.

Nota:

- Para probar en el Mac, `http://localhost` esta bien.
- Para instalar en iPhone con offline fiable, conviene HTTPS.

## Fase 4: Pruebas

Pendiente.

Casos:

1. Abrir en escritorio.
2. Registrar kcal.
3. Registrar kcal + macros.
4. Cambiar objetivo diario.
5. Borrar un registro.
6. Borrar el dia.
7. Recargar y confirmar persistencia.
8. Probar offline despues de cargar una vez.
9. Instalar en iPhone.

## Mejoras opcionales

- Ampliar la base local de alimentos con tus comidas habituales.
- Crear alimentos personalizados desde la app.
- Anadir lector de codigo de barras.
- Ampliar la base con tus alimentos habituales.
- Anadir alias tipo "pollo" -> "pollo pechuga".
- Historial por dias anteriores.
- Objetivos de macros.
- Plantillas rapidas.
- Exportar CSV.
- Importar backup.
- Iconos PNG para mejor soporte iOS.
- Modo oscuro.
- Graficas semanales.
