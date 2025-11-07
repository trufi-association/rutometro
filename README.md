# 🚌 Rutometro

Rutometro es una aplicación de planificación de rutas de transporte público para ciudades de México, desarrollada con Flutter y basada en la plataforma Trufi Core.

## 📱 Acerca del Proyecto

Rutometro permite a los usuarios planificar sus viajes en transporte público de manera fácil y eficiente. La aplicación utiliza datos GTFS (General Transit Feed Specification) para proporcionar información precisa sobre rutas, horarios y conexiones de transporte.

### Ciudades Disponibles

Actualmente, Rutometro cuenta con información de transporte para las siguientes ciudades de México:

- 🏙️ **Jilotepec**
- 🏙️ **Oaxaca**
- 🏙️ **Puerto Escondido**
- 🏙️ **Salina Cruz**
- 🏙️ **Toluca**
- 🏙️ **Uruapan**
- 🏙️ **Zamora**
- 🏙️ **Zitácuaro**

## 🏗️ Estructura del Proyecto

El proyecto está organizado en los siguientes componentes principales:

```
rutometro/
├── frontend/          # Aplicación Flutter
├── backend/           # Servidor Open Trip Planner (OTP)
├── GTFS/             # Archivos GTFS por ciudad
├── trufi-gtfs-builder/ # Herramienta para crear archivos GTFS
└── page/             # Página web del proyecto
```

## 🚀 Comenzando

### Prerequisitos

- [Flutter](https://flutter.dev/docs/get-started/install) (SDK 2.18.2 o superior)
- [Docker](https://www.docker.com/) (para el servidor backend)
- [Git](https://git-scm.com/)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/trufi-association/rutometro.git
   cd rutometro
   ```

2. **Configurar el Frontend**
   ```bash
   cd frontend
   flutter pub get
   flutter run
   ```

3. **Configurar el Backend (OTP Server)**
   
   Consulta el [README del backend](backend/README.md) para instrucciones detalladas sobre cómo configurar y ejecutar el servidor Open Trip Planner.

## 📋 Características

- ✅ Planificación de rutas multipunto
- ✅ Información en tiempo real de transporte público
- ✅ Interfaz intuitiva y fácil de usar
- ✅ Soporte para múltiples ciudades
- ✅ Búsqueda de paradas y estaciones
- ✅ Visualización de mapas interactivos
- ✅ Disponible en múltiples plataformas (Android, iOS, Web)

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Flutter/Dart
- **Backend**: Open Trip Planner (OTP)
- **Datos**: GTFS (General Transit Feed Specification)
- **Contenedores**: Docker
- **Mapas**: OpenStreetMap
- **Core**: [Trufi Core](https://github.com/trufi-association/trufi-core)

## 📦 Componentes del Proyecto

### Frontend (Flutter App)

La aplicación móvil construida con Flutter que proporciona la interfaz de usuario para la planificación de rutas.

### Backend (OTP Server)

Servidor Open Trip Planner que procesa las solicitudes de planificación de rutas utilizando los datos GTFS.

### GTFS Data

Archivos GTFS que contienen información sobre las rutas, paradas, horarios y servicios de transporte para cada ciudad.

### Trufi GTFS Builder

Herramienta para crear y mantener archivos GTFS a partir de datos geográficos. Consulta el [README de GTFS Builder](trufi-gtfs-builder/README.md) para más información.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

### Agregar una Nueva Ciudad

Si deseas agregar datos de transporte para una nueva ciudad:

1. Crea los archivos GTFS usando [Trufi GTFS Builder](trufi-gtfs-builder/)
2. Agrega la carpeta de la ciudad en `GTFS/Mexico-[NombreCiudad]/`
3. Configura el servidor OTP para incluir los nuevos datos
4. Actualiza la documentación

## 📄 Licencia

Este proyecto es parte de la [Trufi Association](https://github.com/trufi-association).

## 🌐 Enlaces Útiles

- [Trufi Association](https://github.com/trufi-association)
- [Trufi Core](https://github.com/trufi-association/trufi-core)
- [Open Trip Planner](http://www.opentripplanner.org/)
- [GTFS Specification](https://gtfs.org/)

## 📧 Contacto

Para preguntas, sugerencias o reportar problemas, por favor abre un [issue](https://github.com/trufi-association/rutometro/issues) en este repositorio.

---

Desarrollado con ❤️ para mejorar el transporte público en México