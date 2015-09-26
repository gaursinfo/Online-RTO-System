function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/index.html')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/index.html')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/index.html')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js'];c=b.join(' ');h.className+=' '+c;return c};css_browser_selector(navigator.userAgent);

/*---------------------------------------------------------------------*/
;(function($){
/*---------------------------------------------------------------------*/
$(document).ready( function(){
/*---------------------------------------------------------------------*/	
function validate() { return false;};
//dropdown('nav', 'hover', 1);
$('body').removeClass('noJS').addClass('hasJS');

if( $('.imageScroll').length > 0 ){
	var sliderClass= ".imageScroll"
	 $(sliderClass).each(function(i) {
		 var sldieN = $(this).parent().find('.next');
		 var sldieP = $(this).parent().find('.prev');
		 var playPause = $(this).parent().find('.playPause');
		 var slidePager = $(this).parent().find('.sldPager');
		$(this).cycle({ 
			fx:    	'fade', 
			speed: 	700, 
			timeout: 6000, 
			prev:   sldieP, 
			next:   sldieN,
			pager:  slidePager,
			//easing: 'easeOutBounce',
			cleartypeNoBg: true
		}); 
		
		$('.playPause').toggle(function() {
                $('.imageScroll').cycle('pause'); 
				$(this).addClass('play');
				$(this).removeClass('pause');
                }, function() {
                $('.imageScroll').cycle('resume'); 
				$(this).addClass('pause');
				$(this).removeClass('play');
        }); 
	 });
};

if( $('.imageRotate li').length > 1 ){
	var sliderClass= ".imageRotate"
	 $(sliderClass).each(function(i) {
		 var sldieN = $(this).parent().find('.next');
		 var sldieP = $(this).parent().find('.prev');
		 var playPause = $(this).parent().find('.playPause');
		 var slidePager = $(this).parent().find('.sldPager');
		$(this).cycle({ 
			fx:    	'turnLeft', 
			speed: 	700, 
			timeout: 6000, 
			prev:   sldieP, 
			next:   sldieN,
			pager:  slidePager,
			pause:   1,
			//easing: 'easeOutBounce',
			cleartypeNoBg: true
		}); 
		
		$(playPause).toggle(function() {
                $(sliderClass).cycle('pause');
				$(this).addClass('play');
				$(this).removeClass('pause');
                }, function() {
                $(sliderClass).cycle('resume', true);
				$(this).addClass('pause');
				$(this).removeClass('play');
        }); 
	 });
};


if($('ul.tabs').length > 0){
	$(".tab_content").hide();
	$(".tab_content:first").show(); 
	$("ul.tabs li a").click(function() {
		$("ul.tabs li a").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
		return false;
	});
	};
if($('.tabNav').length > 0){	
	$(".tabContent").hide();
	$(".tabContent:first").show();
	$(".tabNav li a:first").addClass("active");
	$(".tabNav li a").click(function() {
		$(".tabNav li a").removeClass('active');
		$(this).addClass("active");
		$(".tabContent").hide();
		var selected_tab = $(this).attr("href");
		$(selected_tab).fadeIn();
		return false;
	});
};
if( $("select.customSelect").length > 0){
		$("select.customSelect").selectbox();	
};
if( $(".addthis_toolbox").length > 0){
function initAddThis() { addthis.init()}$(window).scroll(function(){if ($(window).scrollTop() == $(document).height() - $(window).height()){initAddThis(); };});
};	

if( $(".newsListing li").length > 2){
        $('#news-container').vTicker({ speed: 700, pause: 8000, animation: 'fade', mousePause: false, showItems: 1, height: 210 });
};	
if( $(".scrollTextIn").length > 0){
$('.scrollerT').marquee({
					//speed in milliseconds of the marquee
					speed: 20000,
					//gap in pixels between the tickers
					gap: 30,
					//gap in pixels between the tickers
					delayBeforeStart: 7000,
					//'left' or 'right'
					direction: 'left',
					//true or false - should the marquee be duplicated to show an effect of continues flow
					duplicated: true,
					//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
					pauseOnHover: true
				});
}


if( $("#backToTop").length > 0){
	$(window).scroll(function(){
		if ($(window).scrollTop()>120){
		$('#backToTop').fadeIn('200');}
		else {
		$('#backToTop').fadeOut('200');}
	});
	$('#backToTop').click(function(){
		$('html, body').animate({scrollTop:0}, '200');
		return false;
	});
};
if( $(".logoScroll").length > 0){
$('.logoScroll').carouFredSel({
					width: '100%',
					scroll: 1,
					circular: true,
					auto: true,
					prev: '.botPrev',
					next: '.botnext'
				});
};

if( $(".tableData").length > 0){
	$('.tableData').each(function(){
		$(this).find('tr').each(function(){	
		$(this).find('td:first').addClass('firstTd');								 
		$(this).find('th:first').addClass('firstTh');
		$(this).find('th:last').addClass('lastTh');
		});
		$(this).find('tr:last').addClass('lastTr');
		$(this).find('tr:even').addClass('evenRow');
		$(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
	});	
};
if( $(".acc_trigger").length > 0){
	$('.acc_container').hide(); //Hide/close all containers
	if( $(".openFirstAcc").length > 0){
	$('.openFirstAcc').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
	};
	$('.acc_trigger').click(function(){
	 	$(this).next().slideToggle('slow');
		$(this).toggleClass('active');		
		return false; //Prevent the browser jump to the link anchor
	});
	$('.stateUl li a').click(function(){ 
		//$('.acc_trigger').removeClass('active');
		//$('.acc_container').slideUp();
		var currentTab = $(this).attr('href');
		$(currentTab).addClass('active'); 
		$(currentTab).next().slideDown();
		//return false;
	});	
};

if( $(".sideMenu").length > 0){
var $sidebar   = $(".sideMenu"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 0;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().css({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().css({
                marginTop: 0
            });
        }
    });
};
/*if( $(".gallery").length > 0){
$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:6000, autoplay_slideshow: false});
	$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
};*/

if( $("*[rel^='prettyPhoto']").length > 0){
function ppOpen(panel, width){
		$.prettyPhoto.close();
		setTimeout(function() {
			$.fn.prettyPhoto({social_tools: false, deeplinking: false, show_title: false, default_width: width, theme:'pp_silvercms'});
			$.prettyPhoto.open(panel);
		}, 300);

	} // function to open different panel within the panel

	$("a[data-rel^='prettyPhoto'], .prettyphoto_link").prettyPhoto({theme:'pp_silvercms',social_tools:false, deeplinking:false});
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'pp_silvercms',allow_expand: false, deeplinking:false});
	$("a[data-rel^='prettyPhoto[login_panel]']").prettyPhoto({theme:'pp_silvercms', default_width:800, social_tools:false, deeplinking:false});
	
	$(".prettyPhoto_transparent").click(function(e){
		e.preventDefault();
		$.fn.prettyPhoto({social_tools: false, deeplinking: true, show_title: false, default_width: 980, theme:'pp_silvercms transparent', opacity: 0.95});
		$.prettyPhoto.open($(this).attr('href'),'','');
	});
	
	//$("a[rel^='prettyPhotoVideo']").prettyPhoto({theme:'pp_silvercms transparent', ajax:true, overlay_gallery:false, default_width:800});
	
};
if( $(".getFocus").length > 0){
	$(".getFocus").each(function(){
	$(this).on("focus", function(){
    if ($(this).val() == $(this)[0].defaultValue) { $(this).val("");};
  }).on("blur", function(){
      if ($(this).val() == "") {$(this).val($(this)[0].defaultValue);};
  });								  
});
};



/*---------------------------------------------------------------------*/
});
})(jQuery);