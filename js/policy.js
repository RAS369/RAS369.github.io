function showandhide() {
    var x = document.getElementById("privacyhide");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.width = '100%'
    } else {
      x.style.display = "none";
    }
  }
  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }