document.getElementById("show").addEventListener("click", showMenu)
document.getElementById("hide").addEventListener("click", hideMenu)
        function showMenu(){
            navLinks.style.right = "0"
        }
        function hideMenu(){
            navLinks.style.right = "-200px"
        }