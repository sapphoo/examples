
window.onload = function(){//onload是dom范畴的一个事件
	//获得容器对象
	var box = document.getElementById('container');

	//获得图片nodelist对象集合
	var imgs = box.getElementsByTagName('img');

	var imgWidth = imgs[0].offsetWidth;//offsetWidth属性属于dom样式的内容

	var exposeWidth = 160;

	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px';//style是dom中进行css属性设置的内容

	//设置每道门的位置
	function setImgsPos(){
	  for (var i = 1, len = imgs.length; i < len; i++){
		  imgs[i].style.left = imgWidth + exposeWidth *(i-1) + 'px';
	  }
	}
	setImgsPos();

	//计算每道门打开移动的距离
	var transWidth = imgWidth - exposeWidth;

	for (var i = 0, len = imgs.length; i < len; i++){
		//使用立即调用的函数表达式 为了获得不同的i值
		(function(i){
			imgs[i].onmouseover = function(){
				setImgsPos();
				//imgs[i].style.left = exposeWidth*i + 'px';
				//逐层打开每道门
				for( var j = 1; j <= i; j++){
					//方法一
					//imgs[j].style.left = exposeWidth * j + 'px';
					//方法二
					imgs[j].style.left = parseInt(imgs[j].style.left) - transWidth + 'px';
					 //imgs[j].style.left获取得到的结果是字符串 要用parseInt转为int
				}

			}
		})(i);
	}
};