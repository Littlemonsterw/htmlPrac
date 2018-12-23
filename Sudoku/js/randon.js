// function mOver(obj) {
// 	obj.backgroundColor = "#f0ad4e";
// 	obj.color = '#fff';
// }

// function mOut(obj) {
// 	obj.backgroundColor = "#fff";
// 	obj.color = '#f0ad4e';
// }
// 
var i;
var intervalID; //定义定时器id
var blockArr = document.getElementsByClassName("block");
var btnStart = document.getElementsByTagName("button")[0];
var ranResult = new Array();
var indexNumber = new Array();

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
	indexNumber = [];
	ranResult = [];
	resetColor();
	for(i=0; i<blockArr.length; i++) {
		indexNumber.push(i);
	}
	for(i=0; i<3; i++) {
		var ran = Math.floor(Math.random()*(indexNumber.length)); 
		ranResult.push(indexNumber[ran]);
		indexNumber.splice(ran,1);
	}

	for(i=0; i<3; i++) {
		blockArr[ranResult[i]].style.backgroundColor = getRandomColor();
		console.log(blockArr[ranResult[i]].style.backgroundColor);
	}
	console.log(ranResult);
}

btnStart.onclick=function() {
	getRandomClass();
	clearInterval(intervalID);
	intervalID = setInterval(getRandomClass,1000);	
}

//重置
function stop() {
	resetColor();
	clearInterval(intervalID);
}