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
                    <li><a href="../index.html#blog">Բլոգ</a></li>
                    <li><a href="../index.html#products">Պրոդուկներ</a></li>
                    <li><a href="../index.html#contact">Կապ</a></li>
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
            <li><a href="../index.html#blog">Բլոգ</a></li>
            <li><a href="../index.html#products">Պրոդուկներ</a></li>
            <li><a href="../index.html#contact">Կապ</a></li>
        `

        document.querySelector('#mob-menu').innerHTML = null;

        document.querySelector('#first-menu').classList.remove('mob-menu-opener')

    }
}
 

function Aside(){
    document.querySelector('.icons').innerHTML = `
        <div>
            <a href="https://www.facebook.com/sscientech" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/sscientech/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/c/Scientechh/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a class="link-copy" style="cursor: pointer" ><i class="fa-solid fa-link"></i></a>
        </div>
    `;

    document.querySelector(".link-copy").onclick = function(){
        navigator.clipboard.writeText(window.location.href);

        document.querySelector('.copied').classList.add('copy--active');

        setTimeout(() => {
            document.querySelector('.copied').classList.remove('copy--active');
        }, 2000);
    }

    document.querySelector('.prod').innerHTML = `
        <div class="thecodefather products--item">
            <img src="../img/logos/tcf-new-logo-dark.png" alt="">
            <div class="text">
                <h3>TheCodeFather</h3>
                <p>Սովորիր ծրագրավորում մեր օգնությամբ և այն զարգացրու մեր խաղերի օգնությամբ</p>
            </div>
        </div>

        <div class="caster products--item">
            <img src="../img/logos/casterwhitelogo.png" alt="">
            <div class="text">
                <h3>Caster</h3>
                <p>Օգտագործիր հայկական CSS / JS գրադարանը</p>
            </div>
        </div>
    `
}

Aside()


function Footer(){
    document.querySelector('.footer').innerHTML = `
        <div class="container">
            <img src="../img/logos/s-logopl.png" alt="">

            <div class="footer__lists">
                <ul>
                    <li><a href="index.html">Գլխավոր</a></li>
                    <li><a href="../index.html#blog">Բլոգ</a></li>
                    <li><a href="../index.html#products">Պրոդուկներ</a></li>
                    <li><a href="../index.html#contact">Կապ</a></li>
                </ul>
                <ul>
                    <li><a style="cursor: pointer;" id="index-prod">TheCodeFather</a></li>
                    <li><a style="cursor: pointer;" id="index-prod">Caster</a></li>
                </ul>
            </div>
        </div>
        <hr>
        <span>Scientech - 2022</span>
    `
};

Footer()