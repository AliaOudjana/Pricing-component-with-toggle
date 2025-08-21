// Toggle controls
const check_box = document.getElementById("pricing-toggle");
const toggle_button = document.getElementsByClassName("toggle-button")[0];
const annually = document.getElementsByClassName("annually")[0];
const monthly = document.getElementsByClassName("monthly")[0];

// Control the toggle with keyboard
toggle_button.addEventListener("keydown", (event) => {
    if(event.code === "Space") {
        event.preventDefault(); // Prevents the page from scrolling when space key is pressed
        if (check_box.checked) {
        monthly.style.display = "none";
        annually.style.display = "flex";
        check_box.checked = false;
        }
        else {
            annually.style.display = "none";
            monthly.style.display = "flex";
            check_box.checked = true;
        }
    }
});

// Control the toggle with mouse/trackpad
check_box.addEventListener('change', function(){
    if(this.checked){
        annually.style.display = "none";
        monthly.style.display = "flex";
    }
    else{
        monthly.style.display = "none";
        annually.style.display = "flex";
    }
});