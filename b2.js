const bernardo = document.querySelector('.Bernardo');
const kaktus = document.querySelector('.kaktus');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    kaktus.style.animationPlayState = 'running'
    button.style.display = 'none'
})

window.addEventListener('click', function() {
    bernardo.style.bottom = '150px'
    setTimeout(() => {
        bernardo.style.bottom = '-5px'
     }, 600);
    })

    setInterval(() => {
        const bernardoBound = bernardo.getBoundingClientRect()
        const kaktusBound = kaktus.getBoundingClientRect()
        const leftJump = bernardoBound.right - 10 >= kaktusBound.left
        const rightJump = bernardoBound.left + 20 <= kaktusBound.right
        const topJump = bernardoBound.bottom >= kaktusBound.top
        if (leftJump && topJump && rightJump) {
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>'
        }
    }, 100);