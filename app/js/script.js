const menu = document.querySelector("#menu") 
const header = document.querySelector('.header');
const fadeE = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

menu.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open')
        fadeE.forEach( (e) => {
            e.classList.add('has-fade')
        })

        body.classList.remove('noScroll')

    }else{ header.classList.add('open')
        fadeE.forEach( (e) => {
            e.classList.remove('has-fade')
            
        })
        body.classList.add('noScroll')
    }
});








