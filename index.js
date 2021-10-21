let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let list = [];
list.push('blue');
list.push('red');
list.push('green');
// list.push('orange');
// list.push('black');
// list.push('tomato');
// list.push('cyan');

let rect = container.getBoundingClientRect();
let full_value = 0;
let margin = 10;

function makeBar({color}) {
    let height = (rect.height / list.length) - margin;
    let state = {
        value: 0,
        rank: 0,
        growth: 0,
    }
    let bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.left = '0';
    bar.style.borderRadius = `${height / 2}px`;
    bar.style.transition = 'top 1s';
    bar.style.color = '#fff';
    bar.style.height = `${height}px`;
    bar.style.background = color;
    container.appendChild(bar);

    let label = document.createElement('div');
    label.className = 'label';
    bar.appendChild(label);

    let pointer = {
        set value(val) {
            state.value = val;
            let percent = (state.value / full_value) * 100;
            bar.style.width = `${percent}%`;
            label.textContent = state.value;
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
    return pointer

}

let bar_list = list.map(color => makeBar({color}));

let limit = 5000; //
let spent = 0; //흐른시간
let start = performance.now();
let hs;

function setMax(mode) {
    mode = mode || "First is 100%";
    if(mode === "First is 100%") {
        full_value = bar_list.map(bar => bar.value + bar.growth).reduce((a, b) => {
            if (a > b) return a;
        })
    } else if (mode === "Total Value Sum"){
        full_value = bar_list.map(bar => bar.value)
            .reduce((a, b) => a + b);
    } else if (mode === "Best & Worst Sum"){
        full_value = bar_list.map(bar => bar.value)
            .filter((v, i) => (i === 0 || i === bar_list.length - 1))
            .reduce((a, b) => a + b);
    } else {
        //pass
    }
}

function tick() {
    let p = performance.now();
    let dt = p - start; //프레임 시간 차이
    start = p;
    spent += dt;
    if (spent > limit) {
        spent = limit
    }

    setMax();

    bar_list.forEach(bar => {
        bar.value += bar.growth;
    });

    bar_list.sort(function (bar1, bar2) {
        if (bar1.value > bar2.value) {
            return -1;
        } else if (bar1.value < bar2.value) {
            return 1;
        } else {
            return 0;
        }
    })

    bar_list.forEach((bar, idx) => {
        bar.rank = idx;
    });

    let fl = Math.floor((spent / limit) * 100);
    if (hs !== fl) {
        hs = fl;
        bar_list.forEach(bar => {
            if (fl === 0 || Math.random() < 0.5) {
                bar.growth = Math.round(Math.random() * 100);
                if (!bar.growth) {
                    bar.growth = 1;
                }
            }
        })
        console.log(fl, fl%1)
    }

    if (spent < limit) {
        requestAnimationFrame(tick);
    }
}

tick();

//연도별 성장
//연도별 값


