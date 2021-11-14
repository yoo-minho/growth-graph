import list from "./data/PremierLeague2021.js";

const mode = "bottom2top"; //bottom2top, down
const isBottom2Top = mode === "bottom2top";
const bar_list = list.map(makeBar);
tick(0, 0, performance.now());

///////////////////////////////////////////////////////////

function makeBar({color, name, src, growths, values}) {

    const container = document.getElementById("container");
    const rect = container.getBoundingClientRect();
    const margin = 30;

    const state = {
        value: 0,
        rank: 0,
        name: name,
    }

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.background = color;
    bar.style.color = '#fff';

    let width, height;

    if (isBottom2Top) {
        width = (924 / list.length) - margin;
        //width = (rect.width / list.length) - margin;
        bar.style.bottom = '0';
        bar.style.borderRadius = `${width / 2}px`;
        bar.style.transition = 'left 1s';
        bar.style.width = `${width}px`;
        bar.style.display = 'flex';
        bar.style.justifyContent = 'center';
    } else {
        height = (rect.height / list.length) - margin;
        bar.style.left = '0';
        bar.style.borderRadius = `${height / 2}px`;
        bar.style.transition = 'top 1s';
        bar.style.height = `${height}px`;
    }

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
            console.log(state.name, val);
            state.value = val;
            numberLabel.textContent = state.value;
        },
        get value() {
            return state.value;
        },
        set rank(val) {
            state.rank = val;
            if (isBottom2Top) {
                bar.style.left = `${state.rank * (width + margin)}px`;
            } else {
                bar.style.top = `${state.rank * (height + margin)}px`;
            }
        },
        get rank() {
            return state.rank
        },
    }
}

function tick(spentTimeMs, prevPercent, prevTime) {

    const dataLength = list[0].growths ? list[0].growths.length : list[0].values.length;
    const totalTimeMs = dataLength * 2000 // data 당 1초 ---5초
    const base = 100 / dataLength;

    const isFirstTick = spentTimeMs === 0;
    const currentTime = performance.now();
    spentTimeMs += currentTime - prevTime; //프레임 시간 차이

    const result = parseInt(Math.floor((spentTimeMs / totalTimeMs) * 100) / base); //몫

    document.querySelector('#roundNumber').textContent = String(result);

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

        const maxValue = 3 * 38/*Math.max.apply(null, bar_list.map(bar => bar.value))*/;

        bar_list.forEach((bar, idx) => {
            if (isBottom2Top) {
                bar.el.style.height = `${(bar.value / maxValue) * 100}%`;
            } else {
                bar.el.style.width = `${(bar.value / maxValue) * 100}%`;
            }
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



