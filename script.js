function checkInBound() {
    var element = document.getElementById("final-instrument");
    var bounding = element.getBoundingClientRect();

    element.style.display = "none";
    while (element.style.display == "none") {
        if (
            bounding.top >= 0 
            && bounding.left >= 0 
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {    
            element.style.display = "inherit";
        } else {
            element.style.display = "none";
        }
    }
}
