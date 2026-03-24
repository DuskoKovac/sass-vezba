var bodyEl = document.querySelector("body");
var selectOptionEl = document.getElementById("themes");

selectOptionEl.addEventListener("change", function(event){
    bodyEl.setAttribute("class", "");
    var selectedTheme = event.target.value;
    
    bodyEl.classList.add(selectedTheme);

});


