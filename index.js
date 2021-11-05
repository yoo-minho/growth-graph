const list = [
    {name: 'red', color: 'red', growths: [1, 2, 3, 4, 5, 1]},
    {name: 'blue', color: 'blue', growths: [2, 2, 4, 4, 6, 2]},
    {name: 'green', color: 'green', growths: [2, 2, 3, 4, 5, 3]},
    {name: 'orange', color: 'orange', growths: [2, 2, 3, 4, 5, 4]},
    {name: 'black', color: 'black', growths: [2, 2, 3, 4, 5, 5]},
    {name: 'tomato', color: 'tomato', growths: [2, 2, 3, 4, 5, 6]},
    {name: 'cyan', color: 'cyan', growths: [2, 2, 3, 4, 5, 7]}
];

const bar_list = list.map(makeBar);
tick(0, 0, performance.now());

///////////////////////////////////////////////////////////

function makeBar({color, name, growths}) {

    const container = document.getElementById("container");
    const rect = container.getBoundingClientRect();
    const margin = 10;

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

    return {
        get growths() {
            return growths;
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

    const dataLength = list[0].growths.length;
    const totalTimeMs = dataLength * 1000 // data 당 1초 ---5초
    const base = 100 / dataLength;

    const currentTime = performance.now();
    spentTimeMs += currentTime - prevTime; //프레임 시간 차이

    const result = parseInt(Math.floor((spentTimeMs / totalTimeMs) * 100) / base); //몫

    if (result >= dataLength) return;

    const currentPercent = result * base;

    if (prevPercent < currentPercent) {
        bar_list.forEach((bar, idx) => {
            if (prevPercent === currentPercent) return;
            bar.value += bar.growths[result];
        })

        const maxValue = Math.max.apply(null, bar_list.map(bar => bar.value));

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

/**
 * 1. 누적값 : [1,2,3,4,5]
 * 2. 성장값 : [1,1,1,1,1]
 *
 */



