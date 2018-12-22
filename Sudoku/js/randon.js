// function mOver(obj) {
// 	obj.backgroundColor = "#f0ad4e";
// 	obj.color = '#fff';
// }

// function mOut(obj) {
// 	obj.backgroundColor = "#fff";
// 	obj.color = '#f0ad4e';
// }
// 

var intervalID; //定义定时器id
var blockArr = document.getElementsByClassName("block");
var btnStart = document.getElementsByTagName("button")[0];

//重置颜色
function resetColor() {
	for(var i=0; i<blockArr.length; i++) {
		blockArr[i].style.backgroundColor = "#f0ad4e";
	}
}

//获取随机颜色
function getRandomColor() {
	return '#' + Math.floor( Math.random() * 0xffffff ).toString(16);
}

//获取随机小格子变色
function getRandomClass() {
	resetColor();
	for(var i=0; i<3; i++) {
		var index = Math.floor(Math.random()*(blockArr.length)); 
		blockArr[index].style.backgroundColor = getRandomColor();
		console.log(index);
	}
}

btnStart.onclick=function() {
	getRandomClass();
	intervalID = setInterval(getRandomClass,2000);
}

//重置
function stop() {
	resetColor();
	clearInterval(intervalID);
}