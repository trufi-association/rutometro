const { osmToGtfs, OSMOverpassDownloader } = require('../../trufi-gtfs-builder')

osmToGtfs({
    outputFiles: { outputDir: __dirname + '/out', trufiTPData: true, gtfs: true, },
    geojsonOptions: {
        osmDataGetter: new OSMOverpassDownloader({
            south: 19.337806,
            west: -102.108526,
            north: 19.50949,
            east: -101.99688,
        }), skipRoute: (route) => {
            return ![2084702,16138350,16138380,16191268,16191364].includes(route.id)
        }
    },
    gtfsOptions: {
        fakeStops: (routeFeature) => [].includes(routeFeature.properties.id),
        stopNameBuilder: (stops) => {
            if (!stops || stops.length == 0) {
                stops = ["Innominada"]
            }
            return stops.join(" y ")
        },
        agencyTimezone: "America/Mexico_City",
        agencyUrl: "https://example.com/",
        defaultFares: { currencyType: "MXN" },
        feed: {
            publisherUrl: "https://example.com",
            publisherName: "uruapan",
            lang: "es",
            version: new Date().toUTCString(),
            contactEmail: "email@example.com",
            contactUrl: "http://support.example.com",
            startDate: "20000101",
            endDate: "21000101",
            id: "uruapan"
        }
    }
}).catch(error => console.error(error))
