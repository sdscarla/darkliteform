const mode = document.getElementById('mode_icon'); //pega o ícone de modo

mode.addEventListener('click', () => { //adicionar evento de click
 //pega o formulário

 const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) { //verifica se contem o ícone da lua
        mode.classList.remove('fa-moon'); //remove o ícone da lua
        mode.classList.add('fa-sun'); //adiciona o ícone de sol

        form.classList.add('dark');
        return;
    }
    
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark'); //remove a classe 'dark'
});
