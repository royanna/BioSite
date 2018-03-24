$(document).ready(function(){
	getData("Translational");
	getArt("Neuroscience");
});
/*重新显示文章*/
function cleanStr(){
	var s1 = cutString($("#preface").text(),120);
	$("#preface").text(s1);
	$(".para").each(function () {
        var s = cutString($(this).text(),120);
	    $(this).text(s);
    });
    var s2 = cutString($(".fulltext").text(),480);
    $(".fulltext").text(s2);
}
/*截断多余文章*/
function cutString(str,len){
	if(str.length < len){
		return str;
	}
	else{
		str = str.substring(0,len-6) + "......";
		return str;
	}
}
/*ajax获取数据*/
function getData(type){
	$.ajax({
		type:"get",
		url:"json/art.json",
		async:true,
		success: function(data){
			var preface = JSON.stringify(data[type][0]);
			preface = preface.split(":")[1].split("\"")[1];      //前言
			$("#preface").text(preface);
				
			var t = 1;
			$(".para").each(function () {
				var art1 = JSON.stringify(data[type][t]);t++;
				var artone = art1.split(":")[1].split("\"")[1];     
		        $(this).text(artone);
		    });
		    cleanStr();
		    t = 1;
		    $(".imgs").each(function () { 
				var art2 = JSON.stringify(data[type][t]);t++;  
				var url1 = art2.split(":")[2].split("\"")[1];
		        $(this).attr("src",url1);
		    });
		}
	});
}
function getArt(type){
	$.ajax({
		type:"get",
		url:"json/art.json",
		async:true,
		success: function(data){
			var preface = JSON.stringify(data[type][0]);
			preface = preface.split(":")[1].split("\"")[1];     
			$(".fulltext").text(preface);
			cleanStr();
		}
	});
}
$("#btn1").click(function(){ 
	getData("Translational");
});
$("#btn2").click(function(){
	getData("Pharmaceutical");
});
$("#btn3").click(function(){
	getData("Biological");
});
$("#btn4").click(function(){
	getData("Research");
});
$("#btn5").click(function(){
	getArt("Neuroscience");
});
$("#btn6").click(function(){
	getArt("Information");
});
