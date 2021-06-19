# Inventory App React

Aplicación sencilla para gestión de inventarios, hecha en [react](https://reactjs.org/), sobre [Vite](https://vitejs.dev/).

## Contenido:

- [Instalación](#instalación)
- [Scripts](#scripts)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
  - [Branches](#branches)
- [Uso con VSCODE](#vscode)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/gustavo-pateti/inventory-app-react.git
```

2. Desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

## Scripts

- Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

- Crea el bundle de producción:

```bash
npm run build
```

- Ejecuta un servidor local y sirve el bundle de producción:

```bash
npm run serve
```

- Lintea el código:

```bash
npm run lint
```

Hacer lint ejecuta los linters de código para Javascript ([Eslint](https://eslint.org/)) y CSS ([Stylelint](https://stylelint.io/)), los cuales revisan si hay errores de sintaxis o estilo, y corrijen automáticamente todos los que puedan.

## Configuración

El proyecto cuenta con una serie de archivos de configuración en su raíz:

- `vite.config.js`:

Define plugins y activa o desactiva caracterísitcas del funcionamiento de [Vite](https://vitejs.dev/).

- `eslint.config.js`:

Especifica el comportamiento de [Eslint](https://eslint.org/), el linter para Javascript, asi como la activación y desactivación de reglas de corrección específicas.

- `eslint.config.js`:

Configura [Stylelint](https://eslint.org/), el linter para CSS.

## Desarrollo

Para trabajar en este repositorio haremos uso del flujo de trabajo [Gitflow](), el cual es bastante sencillo, y se describe a continuación.

### Branches

Existe una sola rama central:

#### `master`

Esta es la rama de producción, y todo lo que se agregue a ella puede ser publicado y puesto online.

Al momento de trabajar en cualquier tarea, se deberá sacar una rama a partir de `master`:

**Ejemplo:**

Se agregará un nuevo componente *Button*, tarea que corresponde al issue #5, ya creado, y te ha sido asignado:

1. **Revisas los detalles y requisitos** de la tarea, detallados en el **issue**.

2. **Creas**, en local, **una rama nueva**:

```bash
git checkout -b feat-5/button-component
```

Importante: NUNCA modificar la rama `master` directamente.

3. **Subes la rama al repositorio**, de esta manera, otros pueden revisar tu avance o probarla localmente:

```bash
git push -u origin feat-5/button-component
```

Importante: NUNCA trabajar en una rama asignada a otro desarrollador sin su consentimiento o previo acuerdo.

4. **Trabajas en la rama**, y haces **push** de tus commits a la rama remota:

```bash
git add .
git commit
git push
```

5. Haces un **pull request** de tu rama.

Puedes hacer un pull request por varios motivos:

- La tarea está lista para ser revisada y unida `master`.

- Estás atascado en algo y necesitas ayuda.

- Quieres pedir opinión respecto alguna parte del código.

- Cualquier otro motivo por el cual te interese que sea revisada.

6. La rama es **aprobada** y se une a `master`.

7. Finalmente, se **borra la rama**, tanto remota como localmente.

### Nomenclatura de ramas

La estructura básica para nombres de *branches* que usaremos es:

```bash
[tipo de tarea]-[número de issue]/[nombre-descriptivo]
```

Importante: el nombre descriptivo debe estar en inglés.

*Incorrecto:*

```bash
feat-4/botones-con-iconos
```

*Correcto:*

```bash
feat-4/icon-button
```

### Tipos de ramas

Inicialmente tendremos dos tipos de tareas/issues:

- **Features:** son características, funciones o elementos nuevos. Se utiliza el prefijo `feat-`. Ejemplo:

```bash
git checkout -b feat-15/table-pagination
```

- **Fixes:** son tareas de correción de bugs o errores. Se utiliza el prefijo `fix-`. Ejemplo:

```bash
git checkout -b fix-34/table-row-padding
```

<div id="vscode"></div>
## Uso con VSCODE

A continuación, algunas extensiones útiles y como configurarlas para el proyecto.

### Linting

Para que el editor haga uso de la configuración de los linters, y que además de mostrar los errores en los archivos abiertos, también los corrija (sin necesidad de ejecutar `npm run lint`), se deben instalar las siguientes extensiones:

- [Eslint (extensión)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - por Dirk Baumer.

- [Stylelint (extensión)](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - por Stylelint.

Una vez instaladas, copiar la siguiente configuración para vscode:

```json
{
  // ... otras opciones ...

  // evita que el editor aplique el formateo por defecto al guardar
  "editor.formatOnSave": false,

  // linting y formateo de Javascript/React
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },

  // linting y formateo de CSS
  "stylelint.packageManager": "npm",
  "css.validate": false,
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  }

  // ... otras opciones ...
}
```

Ahora, al guardar los cambios en un archivo Javascript o CSS, corregirá los errores que pueda de manera automática.

Para las reglas de éstilo para código Javascript se ha elegido [Standard](https://standardjs.com/), [aquí](https://standardjs.com/rules.html) puedes ver su lista de reglas.

### Módulos CSS

En el proyecto haremos uso de [módulos css](https://github.com/css-modules/css-modules) para el estilo, por lo tanto agregaremos una extensión que nos habilita el autocompletado para estos:

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) - por clinyong.

### Plantillas de carpetas y archivos

Para automatizar la creación de carpetas y archivos base de componentes usaremos la siguiente extensión:

- [Folder Templates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure) - por Huuums.

Agrega la siguiente configuración a vscode para definir la estructura de componentes que usaremos en este proyecto:

```json
{
  // ... otras opciones ...

  // Definicion de estructura de carpetas
  "folderTemplates.structures": [
    // Plantilla Componente React
    {
      // Nombre de la plantilla
      "name": "React Component",
      // Estructura de archivos de la plantilla
      "structure": [
        {
          // Nombre del archivo
          "fileName": "<FTName>.jsx",
          // Plantilla a usar (ver su definición mas abajo)
          "template": "Component"
        },
        {
          "fileName": "<FTName>.module.css",
          "template": "Style"
        },
        {
          "fileName": "index.js",
          "template": "index"
        }
      ]
    }
  ],
  // Definición de los archivos plantilla y su contenido
  "folderTemplates.fileTemplates": {
    // Archivo JSX
    "Component": [
      "import styles from './<FTName>.module.css'",
      "import PropTypes from 'prop-types'",
      "",
      "/**",
      " * A basic react component.",
      " */",
      "export const <FTName> = ({ children }) => {",
      "  return <div className={styles.<FTName | lowercasefirstchar>}>{children}</div>",
      "}",
      "",
      "<FTName>.propTypes = {",
      "  /** Component content */",
      "  children: PropTypes.node,",
      "}",
      ""
    ],
    // Archivo CSS
    "Style": [
      "/* <FTName> */",
      ".<FTName | lowercasefirstchar> {",
      "  background-color: hsl(0, 0%, 80%);",
      "  color: hsl(0, 0%, 0%);",
      "}"
    ],
    // Archivo exportadpr
    "index": ["export * from './<FTName>'", ""]
  }

  // ... otras opciones ...
}
```

Para ver mas detalles del funcionamiento y uso de la extensión ver su descripción en el editor.

### Miscelánea

Algunas extensiones complementarias que pueden resultar útiles son:

- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) - por Mihai Vilcu.

Agrega autocompletado para archivos que no aparecen por defecto en el intellisense de VSCode al momento de importar o definir urls.
