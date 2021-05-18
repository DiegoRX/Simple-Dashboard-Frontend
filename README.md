# simple-web-service

This is a Frontend dashboard made to vizualize and admin the bussiness logic from a electronic invoice maker.
You can see a deployed versión (it does not have data) on the web: https://simple-vd.web.app/

## Empezando 🚀 
Esta guia tiene como fin entregar al usuario el paso a paso para llevar a cabo la ejecución del proyecto simple-web-service. Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba.

## Prerequisitos 🗒️

Para la ejecución del proyecto serán necesarias las siguientes herramientas.

``` 
  * Git
  * Node Js
  * Firebase
```

### Instalación ⛏️ 

Una serie de ejemplos paso a paso que le indican cómo ejecutar un entorno de desarrollo.

0. Instalar Firebase
    ```sh
        $ npm install -g firebase-tools
    ```    
1. Clonar el proyecto
    ```sh
        $ git clone (https://gitlab.com/simplecol/simple-web-service.git)
    ```
2. Ir al folder simple-web-service
    ```sh
        $ cd simple-web-service
    ```
4. Escriba y ejecute el siguiente comando
    ```sh
        [simple-web-service] $ npm install
    ```
5. Escriba y ejecute el siguiente comando
    ```sh
        [simple-web-service] $ npm init
    ```
6. Archivos necesarios para realizaar deploy en firebase:
        .
        └── .env

7. Se debe crear el archivo .env y es una copia del archivo .env.example con los valores reales.

9. Para ejecutar el aplicativo en desarrollo escriba los siguientes comando.
    ```sh
        [simple-web-service] $  npm run start
    ```
## Firebase Deploy 

1. Escriba y ejecute el siguiente comando
    ```sh
        [simple-web-service] $ npm run build
    ```

3. Escriba y ejecute el siguiente comando
    ```sh
        [simple-web-service] $ firebase deploy
    ```

# Esquema de archivos 📁

    Ditribución de alto nivel de las carpetas

    .
    ├── .firebase
    ├── dist
    ├── api
    ├── node_modules 
    ├── public
    ├── src
    ├── .babelrc
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── webpack.config.js
    └── tslint.json

    
## Construcción:  🔩⚙️

* [ReactJs] - Framework usado
* [JavaScript] - Lenguaje de programación

## Versionamiento

Se uso '/v1' como versión.

## Contribuyentes 

* **Diego Romero** - *Dev* - [DiegoRX](https://github.com/DiegoRX)

