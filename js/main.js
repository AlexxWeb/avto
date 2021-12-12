let btn = document.querySelector('.up')

function magic() {
    if (window.pageYOffset > 20) {
        btn.style.opacity = '0.5'
    } else { btn.style.opacity = '0' }
}

btn.onclick = function() {
    window.scrollTo(0, 0)
}

window.onscroll = magic