let btns = document.getElementsByClassName('btn')
let finish = document.getElementById('finish')

for (const btn of btns) {
    btn.addEventListener('click', function () {
        btn.textContent--;
        if (btn.textContent == 15) {
            btn.classList.remove('btn-primary')
            btn.classList.add('btn-warning')
        };
        if (btn.textContent == 10) {
            btn.classList.remove('btn-warning')
            btn.classList.add('add-danger')
        };
        if (btn.textContent == 5) {
            btn.classList.remove('btn-danger')
            btn.classList.add('btn-succes')
        };
        if (btn.textContent == 0) {
            btn.remove()
        };
        if (btns.length == 0) {
            document.body.classList.add('bg-dark');
            finish.textContent = 'THE END'
        }

    })
}