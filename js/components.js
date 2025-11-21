$().ready(() => {
    fetch('../nav.html')
        .then(response => response.text())
        .then((data) => {
            $(".mNav").replaceWith(data);
        }).then(() => {
            let height = document.getElementById("nav").offsetHeight;
            var divs = document.getElementsByTagName("div");
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.scrollMargin = height + "px";
            }
        });
});
