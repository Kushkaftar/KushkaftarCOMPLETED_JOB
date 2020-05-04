'use strict';

const app = document.querySelector('#app');
console.log(app);

const DomElement = function () {
    this.selector = "";
    this.height = "200px";
    this.width = "600px";
    this.bg = "green";
    this.fontSize = "26px";
};

DomElement.prototype.addElem = function (str) {
    console.log(str);
    switch (str[0]) {
        case ".":
            let div = document.createElement("div");
            div.setAttribute("class", str.slice(1));
            div.innerText = "div";
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.backgroundColor = this.bg;
            div.style.fontSize = this.fontSize;
            app.append(div);
            console.log(div);
            break;
        case "#":
            let p = document.createElement("p");
            p.setAttribute("id", str.slice(1));
            p.innerText = "p";
            p.style.height = this.height;
            p.style.width = this.width;
            p.style.backgroundColor = this.bg;
            p.style.fontSize = this.fontSize;
            app.append(p);
            console.log(p);
            break;
    }
};

const domElement = new DomElement();

domElement.addElem(".qqq");
domElement.addElem("#qqq");