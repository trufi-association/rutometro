# GTFS Mexico

Proyecto consolidado para generar archivos GTFS de ciudades mexicanas usando OpenStreetMap.

## Estructura

```
GTFS/
├── src/                    # Scripts TypeScript por ciudad
│   ├── jilotepec.ts
│   ├── oaxaca.ts
│   ├── toluca.ts
│   ├── puerto-escondido.ts
│   ├── salina-cruz.ts
│   ├── uruapan.ts
│   ├── zamora.ts
│   └── zitacuaro.ts
├── trufi-gtfs-builder/     # Submodulo del generador GTFS
├── out/                    # Archivos GTFS generados (por ciudad)
├── .vscode/                # Configuración de debug
│   └── launch.json
├── package.json
└── tsconfig.json
```

## Instalación

```bash
cd GTFS
npm install
```

## Uso

### Ejecutar script individual

```bash
npm run start:jilotepec
npm run start:oaxaca
npm run start:toluca
npm run start:puerto-escondido
npm run start:salina-cruz
npm run start:uruapan
npm run start:zamora
npm run start:zitacuaro
```

### Debug en VS Code

1. Abre la carpeta raíz del proyecto en VS Code
2. Ve a la pestaña "Run and Debug" (Ctrl+Shift+D)
3. Selecciona la ciudad que quieres ejecutar del dropdown
4. Presiona F5 o click en "Start Debugging"

## Salida

Los archivos GTFS se generan en:
```
GTFS/out/[ciudad]/
├── gtfs/              # Archivos GTFS estándar
├── trufi-tp-data/     # Datos específicos de Trufi
├── routes.json        # Información de rutas
├── stops.json         # Información de paradas
├── readme.md          # Documentación generada
└── log.txt            # Log de ejecución
```

## Ciudades incluidas

- **Jilotepec** - Con cálculo personalizado de velocidad
- **Oaxaca**
- **Toluca** - Con lista extensa de rutas
- **Puerto Escondido**
- **Salina Cruz**
- **Uruapan**
- **Zamora**
- **Zitacuaro**

## Configuración común

Todas las ciudades comparten:
- Zona horaria: `America/Mexico_City`
- Moneda: `MXN`
- Horario por defecto: `Mo-Su 06:00-22:00`
- Frecuencia: 5 minutos (300 segundos)
- Velocidad base: 24 km/h
- Distancia mínima entre paradas: 100 metros
