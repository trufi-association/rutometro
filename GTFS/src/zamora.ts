/**
 * Mexico - Zamora
 * GTFS generation script
 */

import { osmToGtfs, OSMOverpassDownloader } from '../trufi-gtfs-builder';
import * as path from 'path';

async function main() {
  console.log('Starting GTFS generation for Zamora, Mexico...');

  try {
    await osmToGtfs({
      outputFiles: {
        outputDir: path.join(__dirname, '..', 'out', 'zamora'),
        gtfs: true,
        gtfsZip: true,
        readme: true,
      },
      geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
          south: 19.9158,
          west: -102.5388,
          north: 20.1347,
          east: -102.1675,
        }),
        transformTypes: ['bus', 'share_taxi', 'minibus'],
        skipRoute: (route: any) => {
          return ![2084702].includes(route.id);
        },
      },
      gtfsOptions: {
        agencyTimezone: 'America/Mexico_City',
        agencyUrl: 'https://example.com/',
        cityName: 'zamora',
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
          publisherUrl: 'https://example.com',
          publisherName: 'zamora',
          lang: 'es',
          version: new Date().toUTCString(),
          contactEmail: 'email@example.com',
          contactUrl: 'http://support.example.com',
          startDate: '20000101',
          endDate: '21000101',
          id: 'zamora',
        },
      },
    });

    console.log('✅ GTFS generation completed successfully!');
    console.log(`📁 Output files are in: ${path.join(__dirname, '..', 'out', 'zamora')}`);
  } catch (error) {
    console.error('❌ Error generating GTFS:', error);
    process.exit(1);
  }
}

// Run the script
main();
