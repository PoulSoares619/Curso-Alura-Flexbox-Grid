const botaoMenu = document.querySelector('.cabecalho_menu')
const menu =  document.querySelector('.menu-lateral')

var el = botaoMenu.addEventListener('click', () => {
    if(el){
        
        menu.classList.toggle('menu-lateral--ativo')
    }
})


// var el = document.getElementById('overlayBtn');
// if(el){
//   el.addEventListener('click', swapper, false);
// }