window.onload = function() {
    let peekaboo = document.getElementById("peekaboo");
  
    window.addEventListener("mousewheel", function(e) {  
     
      if (e.deltaY > 0) {
        peekaboo.classList.add("hide");
      } else {
        peekaboo.classList.remove("hide");
      }
    });
  }
  
  
  
  
  