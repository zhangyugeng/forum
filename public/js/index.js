
$(function() {
    document.getElementById("login").onclick = function() {
        console.log("1233")
        location.href = "login"
    };
    document.getElementById("register").onclick = function() {
        location.href = "register"
    };
    $(".more").on("click", function() {
        $(".all-nav").toggle();
        $(".nav-box").toggle();
    })

})