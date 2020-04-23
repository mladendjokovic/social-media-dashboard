const themeChange = document.querySelector('input');

themeChange.addEventListener("change", function(){
    if(this.checked){
    document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark")
    }
});

