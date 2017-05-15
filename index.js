
function func5 (num5,func) {
	num5+=10;
	func(num5);
}


function findHouse (func1,func2,obj) {
	if (obj.price < 2000 && obj.area > 100) {
		func1('找到了合适的房子');
	}else {
		func2('没有找到合适的房源，加点钱吧');
	}
}