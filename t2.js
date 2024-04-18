function fadeIn() {
    var text = $(".content")
        .text()
        .replace(/^\s+|\s+$/g, "");
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 10;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + "</span>");
    }
    $(".content").removeClass("c").html(html.join(""));

    for (i = 0, length = html.length; i < length; i++) {
        !(function (i) {
            setTimeout(function () {
                $(".content").find(".animated").eq(i).addClass("fadeIn");
            }, i * 400);
        })(i);
    }
}

// document.querySelector(".content").onclick = () => {
//     document.querySelector("#heart").hidden = false;
//     document.querySelector("body").style.backgroundColor = "#542246";
//     document.querySelector("#heart").hidden = false;
//     fadeIn();
// };

window.onload = function () {
    setTimeout(function () {
        document.querySelector("#heart").hidden = false;
        document.querySelector("body").style.backgroundColor = "#542246";
        fadeIn(); // Assuming you have a function named fadeIn() to handle the animation
    }, 3200); // Wait for 2 seconds before executing the changes
};
