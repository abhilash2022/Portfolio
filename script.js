if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.ham').style.display = 'inline';
}
else{
    document.querySelector('.cross').style.display = 'inline';
    document.querySelector('.ham').style.display = 'none';
}
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    
        
    } 
    else {
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        document.querySelector('.ham').style.display = 'none';
    }
    
})


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("activean");
      } else {
        reveals[i].classList.remove("activean");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  