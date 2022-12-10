const nav = document.getElementById('navbar')
function toggle(isOpen){
    if(isOpen){
        nav.classList.add('active1');
    } else {
        nav.classList.remove('active1');
    }    
}