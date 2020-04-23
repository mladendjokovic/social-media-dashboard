const themeChange = document.querySelector('input');

themeChange.addEventListener("change", function(){
    if(this.checked){
    document.documentElement.setAttribute("theme", "light");
    } else {
        document.documentElement.setAttribute("theme", "dark")
    }
});

