 var nav = document.querySelector('.nav');
 var menubar = document.querySelector('.menubar');
 menubar.addEventListener('click', function(){
        nav.classList.toggle('active');
 })
        //--------------sticky navbar---------
 window.addEventListener('scroll',function() {
     var header = document.querySelector('.scroll');
     header.classList.toggle('sticky',window. scrollY > 0)
});
var navlink = document.querySelectorAll('.nav-link');
for(var i = 0; i<navlink.length;i++){
       navlink[i].addEventListener('click',function(){
              nav.classList.remove('active');
       })
}
// ---------scroll top------

 window.addEventListener('scroll',function(){
     var scrolltop = document.querySelector('.scroll-top')
     if(this.scrollY >=20){
         scrolltop.classList.add('show-scroll');
     }
       else{
         scrolltop.classList.remove('show-scroll');
     }
})