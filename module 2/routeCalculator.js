// написать математическую функцию
// принимает координаты 2-х точек (долгота, широта)
// возвращает расстояние между точками

// в теле считаем отдельные 6 частей
// потом из 6 частей общую формулу

// radius in meters
const EARTH_RADIUS = 6372795;

function degressToRadians(deg) {
    return deg * Math.PI / 180;
}

function calculateDistanceBetween2Dots(lat1, long1, lat2, long2) {
    const lat1Rad = degressToRadians(lat1);
    const long1Rad = degressToRadians(long1);
    const lat2Rad = degressToRadians(lat2);
    const long2Rad = degressToRadians(long2);

    const cosLat1 = Math.cos(lat1Rad);
    const cosLat2 = Math.cos(lat2Rad);
    const sinLat1 = Math.sin(lat1Rad);
    const sinLat2 = Math.sin(lat2Rad);
    const delta = long2Rad - long1Rad;
    const sinDelta = Math.sin(delta);
    const cosDelta = Math.cos(delta);

    const leftNumerator = Math.pow(cosLat2 * sinDelta, 2);
    const rightNumerator = Math.pow(cosLat1 * sinLat2 - sinLat1 * cosLat2 * cosDelta, 2);
    const numenator = Math.sqrt(leftNumerator + rightNumerator);

    const denumerator = sinLat1 * sinLat2 + cosLat1 * cosLat2 * cosDelta;

    return Math.round(Math.atan2(numenator, denumerator) * EARTH_RADIUS);
}

// точки мы храним в массиве
// [[1, 1], [2, 2], [3, 3], [4, 4]]
// пример перебора многомерного массива
// const points = [[77.1539, -139.398, 3], [-77.1804, -139.55, 4, 5, 6]];
//
// for (let i = 0; i < points.length; i += 1) {
//     console.log(`outerArray i: ${i}, value: [${points[i]}]`);
//     const innerArray = points[i];
//     for (let j = 0; j < innerArray.length; j += 1) {
//         console.log(`innerArray j: ${j}, value: ${innerArray[j]}`);
//     }
// }

function metersToKilometers(meters) {
    return meters / 1000;
};

// const points = [[77.1539, -139.398], [-77.1804, -139.55], [-4.29, -68.26], [77.1539, -139.398]];
// let totalDistance = 0;
// for (let i = 0; i < points.length - 1; i += 1) {
//     const firstPoint = points[i];
//     const secondPoint = points[i + 1];
//
//     console.log(`${i}, firstPoint: [${firstPoint}], secondPoint: [${secondPoint}]`);
//
//     const firstPointLat = firstPoint[0];
//     const firstPointLong = firstPoint[1];
//     const secondPointLat = secondPoint[0];
//     const secondPointLong = secondPoint[1];
//
//     totalDistance += calculateDistanceBetween2Dots(
//         firstPointLat, firstPointLong, secondPointLat, secondPointLong
//     );
// }
//
// console.log(`Total distance: ${totalDistance} meters, ${metersToKilometers(totalDistance)} kilometers`);

const array = [
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [1, 2, 3, 4, 5]
]

for (let i = 0; i < array.length; i += 1) {
    const isEvenNumber = i % 2 === 0;
    const innerArray = array[i];

    if (isEvenNumber) {
        for (let j = 0; j < innerArray.length; j += 1) {
            console.log(innerArray[j]);
        }
    } else {
        for (let j = innerArray.length - 1; j >= 0; j -= 1) {
            console.log(innerArray[j]);
        }
    }

    // for (
    //     let j = isEvenNumber ? 0 : innerArray.length - 1;
    //     isEvenNumber ? j < innerArray.length : j >= 0;
    //     isEvenNumber ? j += 1: j -= 1
    //     ) {
    //     console.log(innerArray[j]);
    // }
}

