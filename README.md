# Kcal PWA

App web instalable para registrar calorias y macros de forma local.

## Estado actual

MVP funcional en `web/`:

- Registro rapido por alimento y gramos.
- Base nutricional local en espanol empaquetada dentro de la PWA.
- Calculo automatico de kcal, proteina, carbohidratos y grasa.
- Alimentos base: avena integral, pechuga de pollo, lechuga, carne picada, arroz, pasta, legumbres, frutas, verduras, lacteos, carnes, pescados y grasas.
- Nota opcional.
- Totales del dia.
- Objetivo diario de kcal configurable desde ajustes.
- Objetivo diario de proteina configurable desde ajustes.
- Historial del dia.
- Borrado de registros.
- Datos guardados en `localStorage`.
- Manifest de PWA.
- Service worker para uso offline.

## Como probarla

Desde este directorio:

```bash
cd web
python3 -m http.server 4173
```

Despues abre:

```text
http://localhost:4173
```

## Instalar en iPhone

Para instalarla y tener offline en iPhone, usa una URL HTTPS. La opcion gratis mas sencilla suele ser GitHub Pages, Netlify o Vercel.

1. Publica la carpeta `web/` en un hosting HTTPS gratuito.
2. Abre la URL en Safari.
3. Toca compartir.
4. Toca `Anadir a pantalla de inicio`.

Nota: si sirves la app desde el Mac con `http://localhost`, funciona para probar en el Mac. Para el iPhone, `localhost` seria el propio iPhone, asi que necesitas una URL accesible desde el movil. Si esa URL no es HTTPS, el modo offline puede no activarse.

## Decisiones

- Gratis.
- Sin App Store.
- Sin Apple Developer Program.
- Sin Apple Health.
- Sin backend.
- Sin login.
- Datos locales en el dispositivo.
- Los valores nutricionales son aproximados por 100 g.
- No depende de una API para buscar alimentos.
- La base esta pensada para uso personal y alimentos simples, no marcas ni platos preparados.
- Se puede ampliar editando `web/data/foods-base-es.js`.

## Fuente de datos

- Valores nutricionales aproximados por 100 g, basados en tablas publicas y composiciones medias de alimentos.
