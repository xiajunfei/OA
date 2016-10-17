var objNode={
	headerContainerUlNode:$('.headerContainerUl li'),
	headerContainTextSpanPhotoNode:$('.headerContainTextSpanPhoto'),
	navLine:$('.nav-line'),
	currentNode:$('.currentNode')
};
function DateFun()
{
	var html='';
	var html2='';
	var str='';
	var dataNow=new Date();
	var MouthNew=dataNow.getMonth()+1;
	var DayWeek=dataNow.getDay();
	switch(DayWeek)
	{
		case 1:str='星期一';break;
		case 2:str='星期二';break;
		case 3:str='星期三';break;
		case 4:str='星期四';break;
		case 5:str='星期五';break;
		case 6:str='星期六';break;
		case 7:str='星期日';break;
		default:break;
	}
	var valDate=dataNow.getFullYear()+"年"+MouthNew+"月"+dataNow.getDate()+"日";
	html+='<span style="width: 110px; font-size: 14px; color: #969696; display: block; text-align:center;" class="datedate">'+valDate+'</span>';
	html2+='<span class="headerContainTextSpanWeek">'+str+'</span>';
	$('.headerContainTextSpanDate').append(html);
	objNode.headerContainTextSpanPhotoNode.before(html2);
}
DateFun();
objNode.headerContainerUlNode.mouseenter(function(){
var liX=$(this).position().left;
objNode.navLine.stop().animate({left:liX+"px"},200);
});
objNode.headerContainerUlNode.mouseleave(function(){
	var liX=objNode.currentNode.position().left;
	objNode.navLine.stop().animate({left:liX+"px"},200);
});
objNode.headerContainTextSpanPhotoNode.mouseenter(function(){
	$('.headerContainTextUl').css('display','block');
});
objNode.headerContainTextSpanPhotoNode.mouseleave(function(){
	$('.headerContainTextUl').css('display','none');
});
$('.headerContainTextUl').mouseenter(function(){
	$('.headerContainTextUl').css('display','block');
});
$('.headerContainTextUl').mouseleave(function(){
	$('.headerContainTextUl').css('display','none');
});
