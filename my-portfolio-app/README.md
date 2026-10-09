# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Idiomas (i18next)

La configuración está en `src/i18n.js` y se importa antes de renderizar React.
El idioma inicial es inglés, salvo que exista una preferencia española guardada
en la clave `language` de localStorage. El selector usa `i18n.changeLanguage`
y sincroniza la preferencia, el atributo `lang` del HTML y el título del documento.

Los textos están en `src/locales/en.json` y `src/locales/es.json`. Para añadir
contenido, agrega la misma clave en ambos archivos y utiliza `t('seccion.clave')`
desde `useTranslation()`. Para frases con formato, utiliza `Trans` y etiquetas
como `<highlight>`, conservando la frase completa en la traducción.

La experiencia comparte empresas, años y tecnologías en
`src/assets/data/experienceData.js`; los meses, cargos y descripciones se
traducen mediante las claves `experience.entries.<id>`.
Las capturas del proyecto son imágenes existentes: se traducen sus descripciones
y textos alternativos, pero no el contenido dentro de las imágenes.

Referencias: [hooks de react-i18next](https://react.i18next.com/latest/using-with-hooks)
y [componente Trans](https://react.i18next.com/latest/trans-component).

### Enlace al CV

Los CV se incluyen desde `src/assets/docs` y están en formato Word (`.docx`). El enlace solicita abrir el documento en una pestaña nueva; el navegador puede descargarlo si no admite visualizar Word. El enlace de “Acerca de mí” selecciona automáticamente la versión española o inglesa según el idioma activo. Vite empaqueta ambos documentos en el build.
