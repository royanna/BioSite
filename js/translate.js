/****************************************画线**********************************************/
var c = document.getElementById("wire");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc($(window).width()/2,10,3,0,2*Math.PI);
ctx.fillStyle="gray";
ctx.fill();

var ctx2 = c.getContext("2d");
ctx2.beginPath();
var point1 = {left:$(window).width()/2,top:10};
var point2 = {left:$(window).width()/2,top:100};
ctx2.moveTo(point1.left,point1.top);
ctx2.lineTo(point2.left,point2.top);
ctx.strokeStyle = "gray";
ctx.stroke();

var ctx3 = c.getContext("2d");
ctx3.beginPath();
ctx3.arc($(window).width()/2,100,4,0,2*Math.PI);
ctx3.fillStyle="#22A7C8";
ctx3.fill();

/*********************************************播放音乐*****************************************/
var audio ;
window.onload = function(){
    initAudio();
    audio.play();
}
var initAudio = function(){
	audio = document.getElementById('audio');
}
function playOrPaused(obj){
	if(audio.paused){
		audio.play();
		obj.src = "img/play.png";
		return;
	}
	audio.pause();
	obj.src = "img/paused.png";
}

/************************************************水球**********************************************/
function liquidArgu(contain,shape,rate){
	var chart = echarts.init(document.getElementById(contain));
	var option = {
		series: [{
			type: 'liquidFill',
	        radius: '80%',
	        shape: shape,
	        data: [rate, 0.45, 0.4, 0.3],
	        label: {
	            normal: {
	                textStyle: {
	                    color: 'white',
	                    insideColor: 'yellow',
	                    fontSize: 30
	                }
	            }
	        }
       }]
    };
    chart.setOption(option);
}
liquidArgu("contain1",'circle',0.5);
liquidArgu("contain2",'diamond',0.6);
liquidArgu("contain3",'roundRect',0.7);
liquidArgu("contain4",'pin',0.8);

/**********************************************数据分析二******************************************/
var myChart = echarts.init(document.getElementById('two-right'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'province',
            type:'pie',
            selectedMode: 'single',
            radius: ['75%', '96%'],

            label: {
                normal: {
                    position: 'inside',
                    fontSize: 7,
                    color:'',
                    fontFamily:'Microsoft Yahei'
                }
            },
            data:[
                {value:4, name:'ZheJiang'},
                {value:3, name:'ShanDong'},
                {value:3, name:'SiChuan'},
                {value:2, name:'GuangDong'},
                {value:2, name:'Beijing'},
                {value:2, name:'ShangHai'},
                {value:2, name:'LiaoNing'},
                {value:1, name:'ShanXi'},
                {value:1, name:'YunNan'},
                {value:1, name:'JiangSu'},
                {value:1, name:'JiLin'}
            ]
        },
        {
            name:'proportion',
            type:'pie',
            radius: ['30%', '70%'],
            label: {
                normal: {
                    position:'inside',
                    align:'right',
                    fontSize: 8,
                    fontFamily:'Microsoft YaHei',
                    color:"#FFEFE0"
                }
            },
            data:[
                {value:1, name:'1.5%'},
                {value:1, name:'2.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'5.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'1.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'5.5%'},
                {value:1, name:'3.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'6.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'3.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'7.5%'},
                {value:1, name:'4.5%'},
                {value:1, name:'7.5%'}
            ]
        },
        {
            name:'type',
            type:'pie',
            radius: ['0%', '25%'],
            label: {
                normal: {
                    position: 'center',
                    fontSize: 12,
                    fontFamily:'Microsoft YaHei',
                    color:'#80F0E3'
                }
            },
            data:[
                {value:22, name:'medicine'}
            ]
        }
    ]
};
myChart.setOption(option);
/*****************************************数据分析三**************************************************/
$(document).ready(function(){  
var chart3 = document.getElementById("three-right");  
var echart3 = echarts.init(chart3);  
var option3 = {  
    tooltip : {  
        trigger: 'axis'  
    },  
    legend: {  
        data:['Numbers']
    },  
    toolbox: {  
        feature: {  
            saveAsImage: {}  
        }  
    },  
    grid: {  
        left: '3%',  
        right: '4%',  
        bottom: '3%',  
        containLabel: true  
    },  
    xAxis : [  
        {  
            type : 'category',  
            boundaryGap : false,  
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#FFFFFF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF',//坐标值得具体的颜色
                }
            },
            data : ['2011','2012','2013','2014','2015','2016','2017']  
        }  
    ],  
    yAxis : [  
        {  
            type : 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#FFFFFF',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF',//坐标值得具体的颜色
                }
            },
        }  
    ],  
    series : [  
        {  
            name:'Number of mental illness',  
            type:'line',  
            stack: 'number',  
            itemStyle : {
				normal : {
					lineStyle:{
						color:'blue'
					}
				}
		    },
            data:[1270, 6382, 2091, 3034, 7890, 6230, 5210]  
        }  
    ]  
};  
echart3.setOption(option3);    
  /*******************************************数据分析四***********************************************/
    var chart4 = document.getElementById("four-right");  
    var echart4 = echarts.init(chart4);  
    var option4 = {
		title: {
		    
		    left: 'center',
		    top: 20,
		    textStyle: {
		        color: '#ccc'
		    }
		},	
		tooltip : {
		    trigger: 'item',
		    formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		visualMap: {
		    show: false,
		    min: 80,
		    max: 600,
		    inRange: {
		        colorLightness: [0, 1]
		    }
		},
		series : [
		    {
		        name:'访问来源',
		        type:'pie',
		        radius : '55%',
		        center: ['50%', '50%'],
		        data:[
		            {value:335, name:'diagnosis'},  /*疾病的诊断、预防、监护、治疗或者缓解*/
		            {value:310, name:'prevention'},
		            {value:274, name:'guardianship'},
		            {value:235, name:'treatment'},
		            {value:400, name:'ease'}
		        ].sort(function (a, b) { return a.value - b.value; }),
		        roseType: 'radius',
		        label: {
		            normal: {
		                textStyle: {
		                    color: 'rgba(255, 255, 255, 0.3)'
		                }
		            }
		        },
		        labelLine: {
		            normal: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255, 0.3)'
		                },
		                smooth: 0.2,
		                length: 10,
		                length2: 20
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: '#c23531',
		                shadowBlur: 200,
		                shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		        },
		        animationType: 'scale',
		        animationEasing: 'elasticOut',
	            animationDelay: function (idx) {
	                return Math.random() * 200;
	            }
			}
		]
	};
	echart4.setOption(option4);    
});  