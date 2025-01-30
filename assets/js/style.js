const mode = document.getElementById('mode_icon'); //pega o ícone de modo
const form = document.getElementById('login_form');

mode.addEventListener('click', () => { //adicionar evento de click
    const form = document.getElementById('login_form'); //pga o formulário

    if(mode.classList.contains('fa-moon')) { //verifica se contem o ícone da lua
        mode.classList.remove('fa-moon'); //remove o ícone da lua
        mode.classList.add('fa-sun'); //adiciona o ícone de sol
        form.classList.add('dark')
    }else{
        mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark'); //remove a classe 'dark'
    }
});

