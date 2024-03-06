window.addEventListener('scroll', function(){
  const headerFixed = document.getElementById('header');
  if(window.scrollY > 0) {
    headerFixed.classList.add('fixed-header');
  }else{
    headerFixed.classList.remove('fixed-header');
  }
})

