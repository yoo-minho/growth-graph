const list = [
    {name: 'red', color: 'red'},
    {name: 'blue', color: 'blue'},
    {name: 'green', color: 'green'},
    {name: 'orange', color: 'orange'},
    {name: 'black', color: 'black'},
    {name: 'tomato', color: 'tomato'},
    {name: 'cyan', color: 'cyan'}
];

let FULL_VALUE = 0; //너비가 100%가 되는 값 - 리스트에 넣어 해결???
const bar_list = list.map(makeBar);

tick();

///////////////////////////////////////////////////////////

function makeBar({color, name}) {

    const container = document.getElementById("container");
    const rect = container.getBoundingClientRect();
    const margin = 10;

    const height = (rect.height / list.length) - margin;
    const state = {
        value: 0,
        rank: 0,
        growth: 0,
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
    bar.appendChild(numberLabel);

    const textLabel = document.createElement('div');
    textLabel.className = 'text-label';
    textLabel.textContent = name;
    bar.appendChild(textLabel);

    return {
        get name() {
            return state.name;
        },
        set value(val) {
            state.value = val;
            let percent = (state.value / FULL_VALUE) * 100;
            bar.style.width = `${percent}%`;
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
        set growth(val) {
            state.growth = val;
        },
        get growth() {
            return state.growth;
        },
    }
}

function tick(spentTimeMs = 0, start = performance.now(), prevPercent = 0) {

    const totalTimeMs = 1000 * 10; //5초

    const p = performance.now();
    spentTimeMs += p - start; //프레임 시간 차이

    const currentPercent = Math.floor((spentTimeMs / totalTimeMs) * 100); //백분율 수치

    FULL_VALUE = Math.max.apply(null, bar_list.map(bar => bar.value + bar.growth));

    bar_list.forEach((bar, idx) => {
        bar.value += bar.growth;
        bar.rank = idx;
        if (prevPercent === currentPercent) return;
        bar.growth = Math.round(Math.random() * 100);
    })

    bar_list.sort((b1, b2) => {
        return b1.value > b2.value ? -1 : b1.value < b2.value ? 1 : 0
    })

    if (currentPercent < 100) {
        requestAnimationFrame(() => tick(spentTimeMs, p, currentPercent));
    }

}