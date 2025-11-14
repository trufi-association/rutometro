/**
 * Mexico - Salina Cruz
 * GTFS generation script
 */

import { osmToGtfs, OSMOverpassDownloader } from '../trufi-gtfs-builder';
import * as path from 'path';

async function main() {
  console.log('Starting GTFS generation for Salina Cruz, Mexico...');

  try {
    await osmToGtfs({
      outputFiles: {
        outputDir: path.join(__dirname, '..', 'out', 'salina-cruz'),
        gtfs: true,
        gtfsZip: true,
        readme: true,
      },
      geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
          south: 16.157866,
          west: -95.229601,
          north: 16.246881,
          east: -95.156508,
        }),
        transformTypes: ['bus', 'share_taxi', 'minibus'],
        skipRoute: (route: any) => {
          return ![16929728].includes(route.id);
        },
      },
      gtfsOptions: {
        agencyTimezone: 'America/Mexico_City',
        agencyUrl: 'https://transportes-salina-cruz.mx/',
        cityName: 'salina-cruz',
        defaultCalendar: () => 'Mo-Su 06:00-22:00',
        frequencyHeadway: () => 300, // 5 minutes
        vehicleSpeed: () => 24,
        skipStopsWithinDistance: 100, // 100 meters between stops
        fakeStops: (routeFeature: any) => false,
        stopNameBuilder: (stops: any) => {
          if (!stops || stops.length === 0) {
            stops = ['Innominada'];
          }
          return stops.join(' y ');
        },
        defaultFares: { currencyType: 'MXN' },
        feed: {
          publisherUrl: 'https://trufi-association.org',
          publisherName: 'Trufi Association',
          lang: 'es',
          version: new Date().toUTCString(),
          contactEmail: 'luz.choque@trufi-association.org',
          contactUrl: 'https://trufi-association.org',
          startDate: '20251101',
          endDate: '20261031',
          id: 'salina_cruz',
        },
      },
    });

    console.log('✅ GTFS generation completed successfully!');
    console.log(`📁 Output files are in: ${path.join(__dirname, '..', 'out', 'salina-cruz')}`);
  } catch (error) {
    console.error('❌ Error generating GTFS:', error);
    process.exit(1);
  }
}

// Run the script
main();
