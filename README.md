
## 📜 Pasos para empezar a desarrollar

Primero, para este proyecto se utilizará [yarn](https://yarnpkg.com/) como administrador de paquetes. En teoría no habría problema si se utiliza simplemente [npm](https://www.npmjs.com/); pero por convención para todos los integrantes del proyecto, se pedirá que tengan yarn.

### 💻 Instalación de Yarn

Para las personas que aún no tengan yarn, lo pueden instalar fácilmente si ya poseen npm. Utilicen el siguiente comando:

```
# npm i yarn -g
```

### 📝 Pequeño resumen de Yarn

Yarn es un administrador de paquetes _rápido_ y _eficiente_ mantenido por **Facebook**, es realmente parecido en su uso a npm. Aquí dejaré algunos comandos de yarn, y lo que hacen:

- `$ yarn install` (Instalar todos los paquetes presentes en un proyecto).
- `$ yarn add [paquete]` (Agregar un paquete a un proyecto).
- `$ yarn remove [paquete]` (Remover un paquete de un proyecto).
- `$ yarn [start | dev | build]` (Ejecutar el script correspondiente presente en el _package.json_, en el caso de que exista).
- `$ yarn cache clean` (Limpiar la caché de archivos de yarn).

<br />

Para conocer más comandos, pueden ir a la [documentación](https://yarnpkg.com/cli/install).

### 🐛 Utilizar el proyecto

Una vez _clonado_ el repositorio, utilizar el siguiente comando para instalar los paquetes necesarios:

```
$ yarn install
```

Una vez finalice la instalación, puede probar la aplicación en modo desarrollo ejecutando el script `start`, de la siguiente manera:

```
$ yarn start
```

Y les mostrará la aplicación, y cada cambio que hagan cambiará en tiempo real.
Ejecuta la aplicación en el modo de desarrollo. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.

### 🔨 Desplegar la aplicación

Para generar los ejecutables para la aplicación, se debe usar el script `package`, de la siguiente manera:

```
$ yarn package
```

Los archivos generados se encuentran dentro de la carpeta `dist`.

### ⚖️ Licencia

Este proyecto no está licenciado.


