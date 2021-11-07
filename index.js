// const $qs = (el, sizzle) => el.querySelectorAll(sizzle);
// const randomColor = () => "#" + Math.round(Math.random() * 0xffffff).toString(16);
// //https://www.premierleague.com/tables?co=1&se=363&ha=-1
// const a = []
// $qs(document, ".tableBodyContainer [data-compseason='363']").forEach(el => {
//     a.push({
//         name: $qs(el, ".long")[0].textContent,
//         src: $qs(el, ".js-badge-image")[0].src,
//         color: randomColor()
//     })
// })
// console.log(JSON.stringify(a));
//
// const g = (json) => {
//     console.log("\"values\" : [" + json.entries.map(v => v.points) + "]");
// }

const list = [
    {
        "name": "Manchester City",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t43.png",
        "color": "#253541",
        "values" : [3,3,4,7,8,11,12,12,15,18,19,20,23,26,26,29,32,38,41,44,47,50,56,59,65,68,71,71,74,74,77,77,80,80,83,83,86]
    }, {
        "name": "Manchester United",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t1.png",
        "color": "#89a6e4",
        "values" : [0,3,3,6,7,7,10,13,16,19,20,23,26,27,30,33,36,40,40,41,44,45,46,49,51,54,57,57,60,63,66,67,67,70,70,71,74]
    },
    {
        "name": "Arsenal",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t3.png",
        "color": "#93e893",
        "values": [3, 6, 6, 9, 9, 9, 12, 12, 13, 13, 13, 13, 14, 14, 17, 20, 23, 24, 27, 30, 31, 31, 31, 34, 34, 37, 38, 41, 42, 42, 45, 46, 46, 49, 55, 55, 58, 61]
    }, {
        "name": "Leicester City",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t13.png",
        "color": "#97ac86",
        "values": [3, 6, 9, 9, 9, 12, 15, 18, 18, 18, 21, 24, 24, 27, 28, 29, 32, 32, 38, 39, 39, 42, 43, 46, 49, 50, 53, 56, 56, 56, 56, 59, 62, 63, 66, 66, 66, 66]
    }, {
        "name": "Chelsea",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t8.png",
        "color": "#49c762",
        "values": [3, 3, 4, 7, 8, 9, 12, 15, 18, 19, 22, 22, 22, 25, 25, 26, 26, 26, 29, 30, 33, 36, 39, 42, 43, 47, 50, 51, 51, 51, 54, 55, 58, 61, 64, 64, 67, 67]
    }, {
        "name": "Newcastle United",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t4.png",
        "color": "#4509a5",
        "values": [3, 3, 4, 7, 7, 8, 11, 11, 11, 14, 14, 17, 17, 18, 18, 19, 19, 19, 19, 19, 22, 22, 25, 25, 25, 26, 27, 28, 28, 29, 32, 35, 36, 36, 39, 39, 42, 45]
    }, {
        "name": "Wolverhampton Wanderers",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t39.png",
        "color": "#fd28ad",
        "values": [3, 3, 3, 6, 9, 10, 13, 13, 14, 17, 17, 17, 20, 20, 21, 21, 22, 22, 22, 23, 23, 26, 27, 30, 33, 34, 35, 35, 35, 35, 38, 41, 41, 42, 45, 45, 45, 45]
    }, {
        "name": "Liverpool",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t14.png",
        "color": "#1aa058",
        "values": [3, 6, 9, 9, 10, 13, 16, 17, 20, 21, 24, 25, 28, 31, 32, 33, 33, 33, 34, 37, 40, 40, 40, 40, 40, 43, 43, 46, 46, 49, 52, 53, 54, 54, 60, 63, 66, 69]
    }, {
        "name": "Crystal Palace",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t31.png",
        "color": "#336fe9",
        "values": [3, 6, 6, 6, 7, 10, 10, 13, 13, 13, 16, 17, 18, 18, 18, 19, 22, 23, 23, 23, 26, 29, 29, 29, 32, 34, 34, 37, 37, 38, 38, 38, 38, 38, 41, 44, 44, 44]
    }, {
        "name": "Everton",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t11.png",
        "color": "#f64a1b",
        "values": [3, 6, 9, 12, 13, 13, 13, 13, 16, 16, 17, 20, 23, 26, 29, 29, 29, 32, 32, 33, 33, 36, 37, 37, 40, 46, 46, 46, 46, 47, 48, 49, 52, 52, 56, 56, 59, 59]
    }, {
        "name": "Leeds United",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t2.png",
        "color": "#a9f8ec",
        "values": [0, 3, 6, 7, 7, 10, 10, 10, 11, 14, 14, 14, 17, 17, 20, 23, 23, 23, 23, 26, 29, 29, 32, 32, 35, 35, 35, 36, 39, 42, 45, 46, 47, 47, 50, 53, 56, 59]
    }, {
        "name": "Southampton",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t20.png",
        "color": "#27e123",
        "values": [0, 3, 6, 7, 7, 10, 10, 10, 11, 14, 14, 14, 17, 17, 20, 23, 23, 23, 23, 26, 29, 29, 32, 32, 35, 35, 35, 36, 39, 42, 45, 46, 47, 47, 50, 53, 56, 59]
    }, {
        "name": "Tottenham Hotspur",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t6.png",
        "color": "#b1a9a0",
        "values": [0, 3, 4, 7, 8, 11, 14, 17, 20, 21, 24, 25, 25, 25, 26, 26, 29, 30, 33, 33, 33, 33, 36, 36, 36, 42, 45, 45, 48, 49, 49, 53, 53, 56, 56, 59, 59, 62]
    }, {
        "name": "Brighton and Hove Albion",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t36.png",
        "color": "#30590f",
        "values": [0, 3, 3, 3, 4, 5, 5, 6, 9, 10, 10, 10, 11, 12, 13, 13, 14, 14, 17, 18, 21, 24, 25, 26, 26, 26, 26, 29, 32, 32, 33, 34, 34, 37, 37, 38, 41, 41]
    }, {
        "name": "Sheffield United",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t49.png",
        "color": "#beb990",
        "values": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 5, 5, 8, 8, 11, 11, 11, 11, 14, 14, 14, 14, 14, 14, 14, 17, 17, 17, 20, 20, 23]
    }, {
        "name": "West Ham United",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t21.png",
        "color": "#a8f948",
        "values": [0, 0, 3, 6, 7, 8, 8, 11, 14, 17, 17, 20, 21, 21, 22, 23, 26, 26, 32, 35, 35, 38, 39, 42, 45, 45, 48, 48, 49, 52, 55, 55, 55, 58, 58, 59, 62, 65]
    }, {
        "name": "Fulham",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t54.png",
        "color": "#dc429b",
        "values": [0, 0, 0, 0, 1, 1, 4, 4, 4, 7, 7, 8, 9, 10, 11, 11, 11, 12, 12, 13, 14, 14, 15, 19, 22, 23, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 28, 28]
    }, {
        "name": "West Bromwich Albion",
        "src": "https://resources.premierleague.com/premierleague/badges/25/t35.png",
        "color": "#832cf",
        "values": [0, 0, 1, 1, 2, 3, 3, 3, 3, 6, 6, 6, 7, 7, 8, 8, 8, 8, 11, 11, 12, 12, 12, 13, 14, 17, 18, 18, 18, 21, 24, 24, 25, 26, 26, 26, 26, 26]
    }
];

const bar_list = list.map(makeBar);
tick(0, 0, performance.now());

///////////////////////////////////////////////////////////

function makeBar({color, name, src, growths, values}) {

    const container = document.getElementById("container");
    const rect = container.getBoundingClientRect();
    const margin = 30;

    const height = (rect.height / list.length) - margin;
    const state = {
        value: 0,
        rank: 0,
        name: name,
    }

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.left = '0';
    bar.style.borderRadius = `${height / 2}px`;
    bar.style.transition = 'top 1s';
    bar.style.color = '#fff';
    bar.style.height = `${height}px`;
    bar.style.background = color;
    container.appendChild(bar);

    const numberLabel = document.createElement('div');
    numberLabel.className = 'number-label';
    numberLabel.textContent = '0';
    bar.appendChild(numberLabel);

    const textLabel = document.createElement('div');
    textLabel.className = 'text-label';
    textLabel.textContent = name;
    bar.appendChild(textLabel);

    const logoSrc = document.createElement('img');
    logoSrc.className = 'logo-src';
    logoSrc.src = src;
    bar.appendChild(logoSrc);

    return {
        get growths() {
            return growths;
        },
        get values() {
            return values;
        },
        get el() {
            return bar;
        },
        get name() {
            return state.name;
        },
        set value(val) {
            state.value = val;
            numberLabel.textContent = state.value;
        },
        get value() {
            return state.value;
        },
        set rank(val) {
            state.rank = val;
            bar.style.top = `${state.rank * (height + margin)}px`;
        },
        get rank() {
            return state.rank
        },
    }
}

function tick(spentTimeMs, prevPercent, prevTime) {

    const dataLength = list[0].growths ? list[0].growths.length : list[0].values.length;
    const totalTimeMs = dataLength * 500 // data 당 1초 ---5초
    const base = 100 / dataLength;

    const isFirstTick = spentTimeMs === 0;
    const currentTime = performance.now();
    spentTimeMs += currentTime - prevTime; //프레임 시간 차이

    const result = parseInt(Math.floor((spentTimeMs / totalTimeMs) * 100) / base); //몫

    if (result >= dataLength) return;

    const currentPercent = result * base;

    if (prevPercent < currentPercent || isFirstTick) {
        bar_list.forEach((bar, idx) => {
            if (prevPercent === currentPercent) return;
            if (bar.growths) {
                bar.value += bar.growths[result];
            } else {
                bar.value = bar.values[result];
            }
        })

        const maxValue = 100/*Math.max.apply(null, bar_list.map(bar => bar.value))*/;

        bar_list.forEach((bar, idx) => {
            bar.el.style.width = `${(bar.value / maxValue) * 100}%`;
        })

        bar_list.sort((b1, b2) => {
            return b1.value > b2.value ? -1 : b1.value < b2.value ? 1 : 0
        })
    }

    bar_list.forEach((bar, idx) => {
        bar.rank = idx;
    })

    if (currentPercent > 100) return;
    requestAnimationFrame(() => tick(spentTimeMs, currentPercent, currentTime));
}



