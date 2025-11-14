/**
 * Mexico - Toluca
 * GTFS generation script
 */

import { osmToGtfs, OSMOverpassDownloader } from '../trufi-gtfs-builder';
import * as path from 'path';

async function main() {
  console.log('Starting GTFS generation for Toluca, Mexico...');

  try {
    await osmToGtfs({
      outputFiles: {
        outputDir: path.join(__dirname, '..', 'out', 'toluca'),
        gtfs: true,
        gtfsZip: true,
        readme: true,
      },
      geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
          south: 18.712811,
          west: -99.900696,
          north: 19.648171,
          east: -99.210725,
        }),
        transformTypes: ['bus', 'share_taxi', 'minibus'],
        skipRoute: (route: any) => {
          return ![19469195,14205514,14273777,14273762,14273843,14273821,14273746,14273735,14250435,14250451,14249884,14249871,14246048,14245979,18623160,14245947,14245927,14269629,14269496,14273878,14273862,14226411,14226337,14277168,14174933,14174952,14180518,16301409,16301410,7437136,7437124,7437115,7437135,7437130,7437123,7437114,7426599,7437127,7437121,7437112,16949951,13498098,7935435,443191,14277168,14205514,14273777,14273762,14273843,14273821,14273746,14273735,8900984,6767597,6744656,13505345,11038036,11038035,11038033,11038032,11038031,6767598,6744658,8480335,5872326,7437134,7437128,7437122,7437113,12280792,7437176,7437165,7437152,7437175,7437164,7437151,7437133,7437120,7437111,7426663,7426597,7426284,7426283,7426218,7426279,9182135,11038034,18624076].includes(route.id);
        },
      },
      gtfsOptions: {
        agencyTimezone: 'America/Mexico_City',
        agencyUrl: 'https://transportes-toluca.mx/',
        cityName: 'toluca',
        defaultCalendar: () => 'Mo-Su 06:00-22:00',
        frequencyHeadway: () => 300, // 5 minutes
        vehicleSpeed: () => 16,
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
          id: 'toluca',
        },
      },
    });

    console.log('✅ GTFS generation completed successfully!');
    console.log(`📁 Output files are in: ${path.join(__dirname, '..', 'out', 'toluca')}`);
  } catch (error) {
    console.error('❌ Error generating GTFS:', error);
    process.exit(1);
  }
}

// Run the script
main();
