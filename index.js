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
        el.innerHTML = `${time.remainDays}:${time.remainHours}:${time.remainMinutes}:${time.remainSeconds}`;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMesssage;
        }
    }, 1000)
};

countDown('Jul 2 2023 23:59:59 GMT-0300', 'clock', 'Feliz Cumpleaños!');

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