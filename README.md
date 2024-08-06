# Alquila Tu Cancha

Alquila Tu Cancha es una aplicación web diseñada para gestionar equipos y jugadores. Utiliza Next.js para el frontend y Docker para la contenedorización.

## Requisitos

- Node.js (versión 18 o superior)
- Docker (opcional, si deseas usar Docker)

## Instalación

### Configuración Local

1. **Clona el repositorio:**

```bash
git clone https://github.com/MatiasCipollone/PruebaAlquilaTuCancha.git
```

2. **Navega al directorio del proyecto:**

```bash
cd PruebaAlquilaTuCancha
```

3. **Instala las dependencias:**

```bash
npm install
# or
yarn
```

4. **Configura las variables de entorno**
   Crea un archivo .env.local en el directorio raíz del proyecto y añade tus variables de entorno. Por ejemplo:

```bash
NEXT_PUBLIC_API_KEY=tu_clave_de_api
```

## Desarrollo Local

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
# or
yarn dev
```

Esto levantará la aplicación en http://localhost:3000.

# Construcción y Ejecución con Docker

## Construye la imagen Docker:

```bash
npm run docker:build
# or
yarn docker:build
```

Esto creará una imagen Docker etiquetada como alquila_tu_cancha.

## Ejecuta el contenedor:

```bash
npm run docker:run
# or
yarn docker:run
```

Esto iniciará un contenedor y expondrá la aplicación en el puerto 3000. Puedes acceder a ella en http://localhost:3000.

## Scripts

```bash
dev: Inicia el servidor de desarrollo de Next.js.
build: Construye la aplicación para producción.
start: Inicia el servidor de producción de Next.js.
lint: Ejecuta ESLint para verificar el código.
docker:build: Construye la imagen Docker.
docker:run: Ejecuta un contenedor Docker a partir de la imagen construida.
```

## Estructura del Proyecto

```bash
pages/: Contiene las páginas de Next.js.
components/: Contiene los componentes reutilizables de la interfaz de usuario.
models/: Contiene las interfaces TypeScript para los modelos de datos.
public/: Contiene archivos estáticos como imágenes y fuentes.
```
