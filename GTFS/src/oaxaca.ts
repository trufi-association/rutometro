/**
 * Mexico - Oaxaca
 * GTFS generation script
 */

import { osmToGtfs, OSMOverpassDownloader } from '../trufi-gtfs-builder';
import * as path from 'path';

async function main() {
  console.log('Starting GTFS generation for Oaxaca, Mexico...');

  try {
    await osmToGtfs({
      outputFiles: {
        outputDir: path.join(__dirname, '..', 'out', 'oaxaca'),
        gtfs: true,
        gtfsZip: true,
        readme: true,
      },
      geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
          south: 16.936643,
          west: -96.851188,
          north: 17.186118,
          east: -96.444694,
        }),
        transformTypes: ['bus', 'share_taxi', 'minibus'],
        skipRoute: (route: any) => {
          return ![2084702].includes(route.id);
        },
      },
      gtfsOptions: {
        agencyTimezone: 'America/Mexico_City',
        agencyUrl: 'https://example.com/',
        cityName: 'oaxaca',
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
          publisherName: 'oaxaca',
          lang: 'es',
          version: new Date().toUTCString(),
          contactEmail: 'email@example.com',
          contactUrl: 'http://support.example.com',
          startDate: '20000101',
          endDate: '21000101',
          id: 'oaxaca',
        },
      },
    });

    console.log('✅ GTFS generation completed successfully!');
    console.log(`📁 Output files are in: ${path.join(__dirname, '..', 'out', 'oaxaca')}`);
  } catch (error) {
    console.error('❌ Error generating GTFS:', error);
    process.exit(1);
  }
}

// Run the script
main();
