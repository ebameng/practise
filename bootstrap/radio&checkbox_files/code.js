define(function(require, exports, module){
	//引入依赖
    require('/static/lib/layer/1.6.0/layer.min.js');
    require('tab');
    var animateMp = require("./common/animate-achievement");
	var ceditor = require('ceditor');
	var commonInterface = require("/static/page/course/common/course_detail_common.js");
	var store=require("store");
	//页面交互
	!function(){
		var ccl=store.get("ccl");
		if(ccl){
			ccl=ccl.split(",");
			$("#js-aticle-container").width(ccl[0]||400);
			$("#js-editor-container").width(ccl[1]||400);
		}
		$("#js-code-container").height($(window).height()-77).show();
	}();

	$(window).on("beforeunload",function(){
		store.set("ccl",$("#js-aticle-container").width()+","+$("#js-editor-container").width());
	});

	$("#js-toggle-width").click(function(){
		var $this=$(this),
			w,
			cw;
		//console.log(123214,$this.text());
		if($this.text()=="全屏"){
			$this.find("span").text("收起");
			$("#js-result-drag-wrap").hide();
			cw=$("#js-aticle-container").width();
			$("#js-result-container").css({
				left:cw,
				width:$(window).width()-cw
			});
		}
		else{
			$this.find("span").text("全屏");
			$("#js-result-drag-wrap").show();
			cw=$("#js-aticle-container").width()+$("#js-editor-container").width();
			$("#js-result-container").css({
				left:cw,
				width:$(window).width()-cw
			});
		}
	});
	$("#js-toggle-vsb").click(function(){
		//rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/#$2.ra  last;
		var $this=$(this),
			w,
			cw;
		//console.log(123214,$this.text());
		if($this.text()=="运行结果"){
			$this.find("span").text("收起结果");
			cw=$("#js-aticle-container").width();
			$("#js-result-container").css({
				left:cw,
				width:$(window).width()-cw
			}).show();
		}
		else{
			$this.find("span").text("运行结果");
			$("#js-result-container").hide();
		}
	});
    $('#js-result-container,#js-toggle-width').hover(function() {
        $("#js-toggle-width").css('visibility','visible');
    },function() {
        $("#js-toggle-width").css('visibility','hidden');
    });

	$("#js-editor-drag-wrap,#js-result-drag-wrap").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});

	function resizeWinow(){
		var $w=$(window),
			w=$w.width(),
			h=$w.height(),
			aw,ew,rw;
		$('#js-code-container').height(h-77);//minus header
		if(w<1200){
			$("#js-result-container").hide();
			$("#js-result-drag-wrap").hide();
			$("#js-toggle-width").hide().find("span").text("全屏");
			$("#js-toggle-vsb").show().find("span").text("运行结果");
			aw=$("#js-aticle-container").width();
			ew=Math.max(400,w-aw);
			aw=Math.max(400,w-ew);
			$("#js-aticle-container").css({
				width:aw
			});
			$("#js-editor-container").css({
				left:aw,
				width:ew
			});
		}
		else{
			$("#js-result-container").show();
			$("#js-result-drag-wrap").show();
			$("#js-toggle-width").show().find("span").text("全屏");
			$("#js-toggle-vsb").hide().find("span").text("运行结果");;
			aw=$("#js-aticle-container").width();
			ew=$("#js-editor-container").width();
			rw=$("#js-result-container").width();

			rw=Math.max(400,w-aw-ew);
			ew=Math.max(400,w-aw-rw);
			aw=Math.max(400,w-ew-rw);

			$("#js-aticle-container").css({
				width:aw
			});
			$("#js-editor-container").css({
				left:aw,
				width:ew
			});
			$("#js-result-container").css({
				left:aw+ew,
				width:rw
			})
		}
	}
	resizeWinow();

	var resizeTimer=null;
	$(window).on('resize',function(){
		//clearTimeout(resizeTimer);
		resizeWinow();
	});



 	$('#bar').on('click',function(){
		$(window).scrollTop($(this).offset().top);
	});

	var $tabA = $('#J_TabType').find('li a');
	var langArr = [];
	var extHash = {
		'js' : 'javascript',
		'py' : 'python'
	};
	$tabA.each(function(i, v){
		var ext = $(v).text().split('.')[1];
		if(extHash[ext]){
			langArr.push(extHash[ext]);
		} else {
			langArr.push(ext);
		}
	});

	//初始化
	var $elems    = $('#J_EditorTabs').find('.editor-item');
	var $resetBtn = $('#J_EditorReset');
	var css       = $('a[href="#editor-tabs-css"]').attr('href');
	//接口列表
	var APIs = {
		othersCode : '/course/otherscode',
		qas        : '/course/ajaxmediaques',
		saveques   : '/course/ajaxsaveques',
		viewCode   : '/course/viewquescode'
	};
	//问题主语言
	var mainLang = $('#J_CodeLang').attr('data-lang');

	//初始化
	var ceditor = ceditor.init($elems);



    $('#J_EditorTabs').fadeIn().tabs();
	$('.editor-btn').fadeIn();

	//提交
	$('#J_Commit').on('click', function(){
		ceditor.commit(mainLang, function(data) {
            commonInterface.tabList&&commonInterface.tabList.mate.load();
            //animate mp;
            var chapterMp = data.data.media;
            var courseMp = data.data.course;
            var data = [];
            chapterMp && data.push({mp: chapterMp.mp.point, desc: chapterMp.mp.desc});
            courseMp && data.push({mp: courseMp.mp.point, desc: courseMp.mp.desc});
            animateMp(data);
        });
	});

   	//发疑问
   	//var WcodeData=window.WcodeData={};

   	$.each("qa,note".split(","),function(k,v){
   		commonInterface.remote[v].extendMethod("reset",function(){
   			$(".js-shot-code[data-type='"+v+"']").removeClass("shoted").attr("title","点击拍照保存代码");
   		});
   	});

   	//drag width
   	var drager={
   		init:function(){
   			//each has min width;
   			var blocks,
   				blocksSelector,
   				i,
   				len,
   				$el;
   			this.blocks=blocks=[];
   			blocksSelector="js-aticle-container,js-editor-container,js-result-container".split(",");
   			for(i=0,len=blocksSelector.length;i<len;i++){
   				$el=$("#"+blocksSelector[i]);
   				blocks.push({
   					el:$el,
   					width:$el.width(),
   					minWidth:parseInt($el.css("minWidth"))||400
   				});
   			}
   			$("#js-editor-drager,#js-result-drager")
   			.attr("unselectable","on")
            .css("user-select","none")
            .on("selectstart", false)
            .on("mousedown",$.proxy(this.start,this));
   			//console.dir(blocks);

   		},
   		start:function(e){
   			this.splitor=$(e.target).closest("#js-editor-drager").length&&1||2;
   			this.x=e.clientX;
   			$("#js-aticle-container,#js-editor-container,#js-result-container")
   			.attr("unselectable","on")
            .css("user-select","none")
            .on("selectstart.codedrager", false);
   			$(document).on("mousemove.codedrager",$.proxy(this.move,this));
   			$(document).on("mouseup.codedrager",$.proxy(this.stop,this));
            //iframe mask
            $("#js-result-container").append("<div class='js-result-drag-mask' style='position:absolute;top:0;left:0;right:0;bottom:0;z-index:911;'></div>")
   		},
   		move:function(e){
   			var dx=e.clientX-this.x,
   				blockLeft,
   				blockRight,
   				blockSub,
   				subWidth,
   				subLeft,
   				dir,
   				addLeft;
   			if(!dx) return ;

   			blockLeft=this.blocks[this.splitor-1];
   			blockRight=this.blocks[this.splitor];

   			if(dx>0){
   				blockSub=blockRight;
   				dir=1;
   			}
   			else{
   				blockSub=blockLeft;
   				dir=-1;
   			}
   			subWidth=blockSub.el.width();
   			dx=Math.abs(dx);
   			if(subWidth-dx<blockSub.minWidth){
   				dx=subWidth-blockSub.minWidth;
   			}
   			if(!dx){
   				return ;
   			}
   			this.x+=dir*dx;

   			blockLeft.el.css({
   				width:blockLeft.el.width()+dir*dx
   			});

   			blockRight.el.css({
   				left:parseInt(blockRight.el.css("left"))+dir*dx,
   				width:blockRight.el.width()-dir*dx
   			});
   		},
   		stop:function(e){
   			$(document).off("mousemove.codedrager");
   			$(document).off("mouseup.codedrager");
   			$("#js-aticle-container,#js-editor-container,#js-result-container")
   			.attr("unselectable","off")
            .css("user-select","")
            .off("selectstart.codedrager");
            $("#js-result-container").find(".js-result-drag-mask").remove();
			$(".editor-item").each(function(i,v){
				ace.edit(this).renderer.onResize();
			});
   		}
   	}

   	drager.init();

   	function codeShotAnimate(target){
		if(!target) return ;
		var offset=$(target).offset(),
			pLeft=offset.left,
			pTop=offset.top,
			$source=$('#J_EditorTabs'),
			sourceOffset=$source.offset();
		$('#J_EditorTabs').clone().appendTo($('body')).css({
			position:'absolute',
			left:sourceOffset.left,
			width:$source.width(),
			top:sourceOffset.top,
			zIndex:9999999
		}).animate({left:pLeft,top:pTop,width:0,height:0,opacity:0},function(){
			$(this).remove()
		});
	}
   	$(".js-shot-code").click(function(){
   		var $this=$(this);
   		if(!$this.hasClass("shoted")){
   			$this.addClass("shoted").attr("title","点击取消");
   			var files=[];
			$.each(ceditor.editors,function(k,v){
				var file={
					filename:v.filename,
					lang:v.lang,
					content:v.getValue()
				};
				files.push(file);
			})
			var jsonData={
				lang :mainLang,
				files: files
			}
			//pageInfo.code[$(this).attr("data-type")]=jsonData;
   			commonInterface.remote[$this.attr("data-type")].set(jsonData);
   			codeShotAnimate($this);
   		}
   		else{
   			$this.removeClass("shoted").attr("title","点击拍照保存代码");
   			commonInterface.remote[$this.attr("data-type")].reset();
   		}
   	});

	//tabs
	$(function(){
		//大图查看器
        function view(el){
            var src=$(el).attr("href");
            var mask=$('<div id="js-imgview-mask" class="imgview-mask"></div>').appendTo($('body')).fadeIn();
            var imgwrap=$('<div id="js-imgview" class="show-img"><img id="bigimage" class="imgplacHolder" src="/static/img/loading-small.gif"><a href="#" class="imgview-close" ></a></div>').appendTo($('body'));
            var img=new Image();
            img.onload=function(){
                var winHeight=$(window).height()-80, //sub
                    winWidth=$(window).width()-80,
                    h=this.height,
                    w=this.width,
                    ratio;
                if(h>winHeight||w>winWidth){
                    ratio=Math.min(winHeight/h,winWidth/w);
                    h=Math.round(h*ratio);
                    w=Math.round(w*ratio);
                }
                imgwrap.animate({
                    marginTop:-h/2,
                    marginLeft:-w/2,
                    width:w,
                    height:h
                },200,function(){
                    imgwrap.find("img").attr({
                        width:w,
                        height:h,
                        src:src
                    });
                });
            }
            img.src=src;
        }

        $(document).off("click.closeview").on("click.closeview",".imgview-close,#js-imgview-mask",function(e){
            e.preventDefault();
            $("#js-imgview-mask,#js-imgview").remove();
        });

        $.fn.viewPhoto=function(){
            $(this).click(function(e){
                var $el=$(e.target);
                if($el.is("img")&&$el.parent().is("a")){
                    view($el.parent());
                    e.preventDefault();
                }
            });
		};

		$('#J_CodeDescr').viewPhoto();
	});

	//重置代码

	$('#J_EditorReset').on('click', function(){
		ceditor._reset();
	});

	//任务提示

	$('#J_CodeQa').find('dt').on('click',function(){
		 $(this).siblings('dd').slideToggle()
	})

    //study time sender;
    if(OP_CONFIG.userInfo){
        !function(){
            //no actual mean to use delta time; use interval constant instead;
            var time=60,
                last=new Date().getTime();
            setInterval(function(){
                last=new Date().getTime();
                $.post("/course/ajaxmediauser",{mid:pageInfo.mid,time:time});
            },time*1000);

            $(window).on("beforeunload",function(){
                $.ajax({
                    url:"/course/ajaxmediauser",
                    method:"post",
                    async:false,
                    data:{mid:pageInfo.mid,time:(new Date().getTime()-last)/1000}
                })
            });
        }();
    }
});
