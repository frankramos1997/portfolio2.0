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
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  
  
  
  