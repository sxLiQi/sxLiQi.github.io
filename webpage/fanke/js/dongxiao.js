//banner
var btns = document.querySelectorAll(".middle .yuan1");
var cons = document.querySelectorAll(".bannerbox .bannerbox1");
var container = document.querySelector(".banner-main");
var btnlast = document.querySelector(".banner-main .left");
var btnnext = document.querySelector(".banner-main .right");
var btnnow = btns[0];
var connow = cons[0];
var number = 0;
var t1;
Array.from(btns).forEach(function(element, index) {
	element.onmouseover = function() {
		clearTimeout(t1);
		t1 = setTimeout(function() {
			number = index;
			btnnow.style.background = "#dddddd";
			element.style.background = "#a10000";
			btnnow = element;

			connow.style.zIndex = 1;
			connow.style.opacity = 0;
			cons[index].style.zIndex = 2;
			cons[index].style.opacity = 1;
			connow = cons[index];
		}, 200);

	};
});

function move() {
	number++;
	if(number == btns.length) {
		number = 0;
	}
	if(number == -1) {
		number = btns.length - 1;
	}

	btnnow.style.background = "#dddddd";
	btns[number].style.background = "#a10000";
	btnnow = btns[number];

	connow.style.zIndex = 1;
	connow.style.opacity = 0;
	cons[number].style.zIndex = 2;
	cons[number].style.opacity = 1;
	connow = cons[number];
};

var t = setInterval(move, 2000);

container.onmouseover = function() {
	clearInterval(t);
};
container.onmouseout = function() {
	t = setInterval(move, 2000);
};
btnlast.onclick = function() {
	number -= 2;

};
btnnext.onclick = function() {
	move();
};

//导航
var lis = document.querySelectorAll(".lists>li");
var seclists = document.querySelectorAll(".seclists");
var arr = [];
Array.from(seclists).forEach(function(secli) {
	let lis = secli.querySelectorAll("li");
	let height = lis.length * 30 - 25;
	arr.push(height);
});
Array.from(lis).forEach(function(li, index) {
	li.onmouseover = function() {
		seclists[index].style.height = arr[index] + "px";
	};
	li.onmouseout = function() {
		seclists[index].style.height = 0;
	};
});