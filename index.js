const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }
};

const countDown = (deadline, elem, finalMesssage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `${time.remainDays}`;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMesssage;
        }
    }, 1000)
};

const countDown2 = (deadline, elem, finalMesssage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `:${time.remainHours}:`;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMesssage;
        }
    }, 1000)
};

const countDown3 = (deadline, elem, finalMesssage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `${time.remainMinutes}:`;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMesssage;
        }
    }, 1000)
};

const countDown4 = (deadline, elem, finalMesssage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `${time.remainSeconds}`;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMesssage;
        }
    }, 1000)
};


countDown('Apr 23 2023 20:40:48 GMT-0300', 'clock', 'Feliz cumple rey');
countDown2('Apr 23 2023 20:40:48 GMT-0300', 'clock2', 'Feliz cumple rey');
countDown3('Apr 23 2023 20:40:48 GMT-0300', 'clock3', 'Feliz cumple rey');
countDown4('Apr 23 2023 20:40:48 GMT-0300', 'clock4', 'Feliz cumple rey');

// Active class nav

const links = document.querySelectorAll('.Nav-item');

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
}