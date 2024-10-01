# Rsbuild Js Shell Template Module | Andreani

**Template base Shell de Microfrontend** para proyectos Frontend que utiliza [Rsbuild](https://rsbuild.dev/) como herramienta de compilación en reemplazo de [CRA](https://create-react-app.dev/).

**El template mantiene la misma arquitectura que el template actual de CRA** (estructura de carpetas), por lo tanto, la forma de trabajar y estructurar una aplicación no se ve modificada.

## Instalación

Recomendamos trabajar con ```pnpm``` como manejador de paquetes para proyectos web frontend, en lugar de ```npm```.

Para instalar las dependencias, luego de crear el proyecto:

``` bash
// Respetar versiones instaladas (recomendado)
pnpm i --frozen-lockfile

// Instalación limpia
pnpm install
```

> Dejamos a continuación la documentación existente sobre PNPM, como utilizarlo y las consideraciones a tener en cuenta cuando se trabaja con este manejador de paquetes.
> 
> [Documentación PNPM](https://architecture-it.github.io/docs/research/npmvspnpm/)

## Variables de entorno

*El archivo .env se recomienda tenerlo sólo de forma local para desarrollo y en el deploy configurar directamente las variables de entorno necesarias* en el ambiente en cuestion, es decir, directamente en Openshift para entorno Test y/o en los respectivos manifiestos para QA y Prod.

>Se recuerda que, para que el proceso de autenticación funcione correctamente, las variables de entorno que se requieren tener obligatorias como lo menciona la librería [React Auth](https://architecture-it.github.io/docs/Platform/Front/Librerias/react-auth#architecture-itreact-auth) son las siguientes:
>``` js
> // B2C variables para RsBuild
>REACT_APP_B2C_CLIENT_ID=************************************
>REACT_APP_B2C_AUTH_DOMAIN=<DOMAIN>
>```

## Modo de uso

Para levantar el shell y trabajar en la aplicación de forma independiente (visualizando solamente las secciones pertenecientes a este), se podrá utilizar el siguiente comando:

``` bash
pnpm start
```

## Sobre el template

### Incluye:

- **Eslint**, extensión de configuraciones estándar de la compañia para proyectos con Typescript.
- **Stylelint**, configuración base para estructurar estilos.
- **Stylesystem**, componentes UI de la librería para estructurar el layout de la aplicación.

### Comandos importantes:

- **start**: inicia el servidor que levanta la aplciación.
- **build**: buildea la aplicación de forma local.
- **preview**: buildea la aplicación y despliega en el servidor local (localhost).
- **test**: ejecuta los test de la aplicación.
- **test:ui**: abre la aplicación de Vitest UI para ejecutar los test y ver el coverage de la aplicación a través de una interfaz gráfica.
- **test:coverage**: ejecuta los test de la aplicación y realiza el reporte de coverage correspondiente.
- **eslint**: ejecuta ESlint para detectar errores en la estructuración del código *(archivos .ts)*.
- **eslint:fix**: ejecuta ESlint y arregla los errores automáticamente si es posible.
- **stylelint**: ejecuta Stylelint para detectar errores en la estructuración de los estilos *(archivos .css o .scss)*
- **stylelint:fix**: ejecuta Stylelint y arregla los errores automáticamente si es posible.
- **lint**: ejecuta Stylelint y ESlint a la vez en busca de errores de código y de estilos.
- **lint:fix**: ejecuta Stylelint y ESlint a la vez y arregla los errores de código y estilos automáticamente si es posible.

### Jest

**Jest** es la herramienta o framework para realizar testing unitario. [ver más en](https://architecture-it.github.io/docs/Testing/UnitTest/front/)

### Module federation


#### COnfiguración de modulos remotos

Dentro del archivo `rsbuild.config.ts` ddebemos configurar el nombre único y los modulos remotos que se van a exponer.

Ejemplo:

```ts
export default mfeConfig({
  dependencies,
  moduleFederation: {
    options: {
      //TODO: revisar que el export y el exposes sea cómo lo tenías antes
      name: "module", // debe ser unico en el shell
      exposes: {
        "./App": "./src/App",
      },
    },
  },
});
```

Y en el .env se configura el puerto en el que se va a levantar el modulo remoto

```sh
PORT=3001
```