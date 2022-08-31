let MenuMedia = window.matchMedia("(max-width: 635px)");
myFunction(MenuMedia);
MenuMedia.addListener(myFunction);

function myFunction(MenuMedia) {
    if (MenuMedia.matches){
        document.querySelector('#first-menu').innerHTML = `
            <li></li>
            <li></li>
            <li></li>
        `

        document.querySelector('#first-menu').classList.add('mob-menu-opener')

        document.querySelector('#mob-menu').innerHTML = `
                <ul>
                    <li><a href="index.html">Գլխավոր</a></li>
                    <li><a href="#blog">Բլոգ</a></li>
                    <li><a href="#products">Պրոդուկներ</a></li>
                    <li><a href="#contact">Կապ</a></li>
                    <li class="mob-menu-closser"><span></span><span></span></li>
                </ul>
        `;

        document.querySelector('.mob-menu-opener').onclick = function(){
            document.querySelector('#mob-menu').classList.toggle('mob-menu--active');
            document.querySelector('.body').classList.add('mob--blur')
        }
    
        document.querySelector('.mob-menu-closser').onclick = function(){
            document.querySelector('#mob-menu').classList.remove('mob-menu--active')
            document.querySelector('.body').classList.remove('mob--blur')
        }

    }else{
        document.querySelector('#first-menu').innerHTML = `
            <li><a href="index.html">Գլխավոր</a></li>
            <li><a href="#blog">Բլոգ</a></li>
            <li><a href="#products">Պրոդուկներ</a></li>
            <li><a href="#contact">Կապ</a></li>
        `

        document.querySelector('#mob-menu').innerHTML = null;

        document.querySelector('#first-menu').classList.remove('mob-menu-opener')

    }
}

let indexprod = document.querySelectorAll('#index-prod');

for(elem of indexprod){
    elem.onclick = function(){
        document.querySelector('.products-no').classList.add('pop-up--open')
    }
}

function Theame(){
    document.querySelector('#theame-open').onclick = function(){
        document.querySelector('.mode__pop-up').classList.toggle('mode--open')
    }

    document.querySelector('.mode__pop-up > #d').onclick = function(){
        document.body.classList.remove('light-mode')
        document.body.classList.remove('dark-mode')
        window.history.pushState(null, null, "?");

    }

    document.querySelector('.mode__pop-up > #s').onclick = function(){
        document.body.classList.toggle('light-mode')
        document.body.classList.remove('dark-mode')

        window.history.pushState(null, null, "?light");

    }

    document.querySelector('.mode__pop-up > #m').onclick = function(){
        document.body.classList.toggle('dark-mode')
        document.body.classList.remove('light-mode')
        window.history.pushState(null, null, "?dark");
    }

    document.querySelector('.mode__pop-up > div').onclick = function(){
        document.querySelector('.mode__pop-up').classList.remove('mode--open')
    }


    if(window.location.href == window.location.protocol + "//" 
        + window.location.hostname + ":" + window.location.port + "/index.html?" 
        || window.location.protocol + "//" 
        + window.location.hostname + ":" + window.location.port + "/index.html"){
        document.body.classList.remove('light-mode')
        document.body.classList.remove('dark-mode')
    }

    if(window.location.href == window.location.protocol + "//" 
        + window.location.hostname + ":" + window.location.port +  "/index.html?light"){
        document.body.classList.toggle('light-mode')
        document.body.classList.remove('dark-mode')
        document.querySelector('.mode__pop-up > #s').setAttribute('checked', '')
    }

    if(window.location.href == window.location.protocol + "//" 
        + window.location.hostname + ":" + window.location.port + "/index.html?dark"){
        document.body.classList.toggle('dark-mode')
        document.body.classList.remove('light-mode')
        document.querySelector('.mode__pop-up > #m').setAttribute('checked', '')
    }
}

Theame()

document.querySelector('.close--products-no').onclick = function(){
    document.querySelector('.products-no').classList.remove('pop-up--open')
}
 

