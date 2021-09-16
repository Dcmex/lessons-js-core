var b = document.getElementById("theme-button");
var t = document.getElementById("theme-link");

b.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let l = "light.css";
    let d = "dark.css";

    var currTheme = t.getAttribute("href");
    var theme = "";

    if(currTheme = l)
    {
   	 currTheme = d;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = l;
   	 theme = "light";
    }

    t.setAttribute("href", currTheme);
}