# API REST MUTATION

## Sobre la construcción de la API 🛠️

Trata de un Backend server desarrollado con Express de node que nos permite hacer 2 consultas:
    
    1.- Metodo POST → /mutation/. nos permite detectar si existe mutacion enviando una secuencia de ADN mediante un HTTP POST con un JSON el cual tiene el siguiente formato.
```
    {
      "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }
```

En caso de verificar una mutación, debería devolver un HTTP 200-OK, en caso contrario un 403-Forbidden
    
    2.- METODO GET → /stats. nos devuelve un JSON con las estadisticas de las verificaciones de ADN en el siguiente formato.
 ```
    {“count_mutations”:40, “count_no_mutation”:100: “ratio”:0.4}
 ```
     
## Comenzando 🚀

Para iniciar con la instalación y ejecución del backend. debemos clonar el proyecto en el directorio de tu preferencia y donde no requieras permisos especiales para acceder.

### Pre-requisitos 📋

Una teniendo los archivos que componen backend server en tu Pc. debemos verificar que contemos con ciertos pre-requisitos. Nota: acontinuacion te dare una serie de comandos deben ser utilizados en la terminal de tu sistema operativo.

    1.- Node v14.16.0 o superior: Si no estas seguro sobre que version de node tienes instalada o si tienes instalado node en tu Pc debes ejecutar el siguiente comando 
    ```
        node -v
    ```

    Esto de deberia arrojar la version de node, en caso de que no sea asi te dejo un link para su instalación. 
        https://nodejs.org/es/download/


    2.- Manejador de paquetes npm v6.14.11: este manejador de paquete por lo general viene con instalado por defecto cuando instalamos node pero de igual forma se los coloco para que verifiquen su existencia.
    ```
        npm -v
    ```

    En caso de no tenerlo o querer actualizar su versión podrias probar el siguiente comando.
    ```
        npm install -g npm@latest
    ```

### Instalación 🔧

Una vez revisado y completada la lista de pre-requisitos podemos acceder a la instalación y ejecución del backend server en modo desarrollo.

Para esto es necesito que abrar la terminal de tu sistema operativo y navegues a la carpeta que contiene el proyecto.

Una vez dentro de la carpeta principal debemos ejecutar desde la terminal el siguiente comando.
```
    npm install
```

Esto instalará todas las dependencias o paquetes de node necesarios para levantar el backend server. Una vez finalizada esta instalación, estamos listo para levantar el backend serve en modo desarrollo.
```
   npm start
```

Una vez ejecutado este comando y compilado el codigo puedes consumir los servicios del backend server de la forma que prefieras.

## NOTA:
En la raiz de nuestro directorio tenemos un archivo llamado .env 📋  Lo primero que debemos hacer es agregar en la variable DB_CNN el DB Connect generado en mongodb.

Toma encuenta que este es un paso muy importante para poder configurar la conexion con tu base de datos.
