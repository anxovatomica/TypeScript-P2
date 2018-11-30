window.addEventListener('load', start, false);
function start() {
    Extra.getHTML();
    //let btn = window.document.getElementById("btn");
    //btn.addEventListener('click', click, false);
}
var Extra = /** @class */ (function () {
    function Extra(price, url) {
        if (price === void 0) { price = 0; }
        if (url === void 0) { url = ""; }
        this.url = url;
        this.price = price;
    }
    Extra.prototype.setValorExtra = function (price, url) {
        this.price = price;
        this.url = url;
    };
    Extra.getHTML = function () {
        var car = new Extra(1000, 'https://i.blogs.es/59c5e3/1366_2000-1/450_1000.jpg');
        var div = window.document.getElementById('extra');
        div.innerHTML = "Price: " + car.price + " URL: " + "<a href='" + car.url + " '> " + "UrlImg" + "</a>";
    };
    return Extra;
}());
var extra = new Extra();
extra.nombre = "Airbag";
extra.url = "imgs/concha_azul.jpeg";
console.log(extra.getHTML());
