const start = document.querySelector('.stopwatch__btn')
const tabsSpan = document.querySelector('.tabsLink__span')
const stopSecond = document.querySelector('.stopwatch__seconds')
const stopMinute = document.querySelector('.stopwatch__minutes')
const stopHour = document.querySelector('.stopwatch__hours')


start.addEventListener('click', function () {
    if (start.innerHTML == 'start') {
        start.innerHTML = 'stop'
        tabsSpan.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(this, i), 1000)
    }

    else if (start.innerHTML == 'stop') {
        start.innerHTML = 'clear'
        tabsSpan.classList.remove('active')
        tabsSpan.classList.add('active_clear')
    }

    else if (start.innerHTML == 'clear') {
        start.innerHTML = 'start'
        tabsSpan.classList.remove('active_clear')
        stopSecond.innerHTML = 0
        stopMinute.innerHTML = 0
        stopHour.innerHTML = 0
    }

})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            stopSecond.innerHTML = 0

            if (stopMinute.innerHTML == 59) {
                stopMinute.innerHTML = 0
                stopHour.innerHTML++
            } else {
                stopMinute.innerHTML++
            }
        } else {
            i++
            stopSecond.innerHTML++
        }

        setTimeout(() => stopWatch(el, i), 1000)
    }
}

const btn = document.querySelector('.btn')
body = document.querySelector('body')

btn.addEventListener('click', function() {
    if(btn.style.background == ''){
        btn.style.background = 'black'
        body.style.background = 'white'
    }else {
        btn.style.background = ''
        body.style.background = ''
    }
})