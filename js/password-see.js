let passwordSee = document.querySelectorAll('.password-see');

for (elem of passwordSee) {
    elem.onclick = function(){
        let password = document.querySelectorAll('.password')
        for(elem of password){
            if(elem.hasAttribute('type', 'password')){
                elem.removeAttribute('type', 'password')
            }else{
                elem.setAttribute('type', 'password')
            }
        }
    }
}