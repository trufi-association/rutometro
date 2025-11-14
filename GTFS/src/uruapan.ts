/**
 * Mexico - Uruapan
 * GTFS generation script
 */

import { osmToGtfs, OSMOverpassDownloader } from '../trufi-gtfs-builder';
import * as path from 'path';

async function main() {
  console.log('Starting GTFS generation for Uruapan, Mexico...');

  try {
    await osmToGtfs({
      outputFiles: {
        outputDir: path.join(__dirname, '..', 'out', 'uruapan'),
        gtfs: true,
        gtfsZip: true,
        readme: true,
      },
      geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
          south: 19.337806,
          west: -102.108526,
          north: 19.50949,
          east: -101.99688,
        }),
        transformTypes: ['bus', 'share_taxi', 'minibus'],
        skipRoute: (route: any) => {
          return ![2084702,16138350,16138380,16191268,16191364].includes(route.id);
        },
      },
      gtfsOptions: {
        agencyTimezone: 'America/Mexico_City',
        agencyUrl: 'https://transportes-uruapan.mx/',
        cityName: 'uruapan',
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
          id: 'uruapan',
        },
      },
    });

    console.log('✅ GTFS generation completed successfully!');
    console.log(`📁 Output files are in: ${path.join(__dirname, '..', 'out', 'uruapan')}`);
  } catch (error) {
    console.error('❌ Error generating GTFS:', error);
    process.exit(1);
  }
}

// Run the script
main();
