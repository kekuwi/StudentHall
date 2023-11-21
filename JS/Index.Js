function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("outer").style.width = "100vw";
    document.getElementById("outer").style.height = "100vh";
    document.getElementById("outer").style.marginLeft = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("outer").style.width = "0";
    document.getElementById("burger").style.width = "0";
    document.getElementById("burger").style.height = "0";
    }