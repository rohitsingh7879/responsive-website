burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.right-nav')

//toggle means laga hai to hata do ya hata hai to laga do
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    navlist.classList.toggle('v-class')
    rightnav.classList.toggle('v-class')
}
)