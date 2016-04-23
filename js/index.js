window.onload=function(){
	var banner=document.getElementsByClassName('banner')[0];
	var ul=document.getElementsByClassName("banner-img")[0];
	var lis=ul.getElementsByTagName("li");
	var bannerbtn=document.getElementsByClassName('banner-btn')[0];

	var btn=bannerbtn.getElementsByTagName('li');
 
	var num=1;
    function move(){
    	 
    	if(num==5){
    		animate(ul,{left:-1349*num},600,Tween.Linear,function(){ul.style.left=0});
    		num=0;
    	}else{
    		animate(ul,{left:-1349*num},600,Tween.Linear)
    	}
    	for(var i=0;i<btn.length;i++){
    		btn[i].classList.remove('active');

    		btn[i].classList.add('circle');

     	}
    	btn[num].classList.add('active');

    	num++;
    }
    var t=setInterval(move,2000);
    for(var i=0;i<btn.length;i++){
    	btn[i].index=i;
    	btn[i].onmouseover=function(){
    		clearInterval(t);
   			animate(ul,{left:-1349*this.index},600,Tween.Linear);

    		for(var j=0;j<btn.length;j++){
    			btn[j].classList.remove("active");
    			btn[j].classList.add('circle');
    			
    		}
    		btn[this.index].classList.add('active');
    	}
    	btn[i].onmouseout=function(){
    		t=setInterval(move,2000);
     		num=this.index+1;
    	}
    }



/*ul.onmouseover=function(){
	clearInterval(t);
}
ul.onmouseout=function(){
	t=setInterval(move,2000)
}*/
// 加入购物车
var addindex=document.getElementsByClassName("add-index");
for(var i=0;i<addindex.length;i++){
	addindex[i].index=i;
	addindex[i].onclick=function(){
		alert("宝贝已经成功加入购物车，等着你带回家哦！")
	}
}








}