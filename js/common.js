function getPosition(i, j) {
    let position = {}
    position.left = i * 120 + 20
    position.top = j * 120 + 20
    return position
}



// 设置背景颜色
function getBgColor(num){
    switch(num){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}
}



// 设置数字颜色
function getNumberColor(num){
	if(num<=4){
		return '#776e65';
	}else{
		return '#fff';
	}
}






























