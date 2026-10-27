// googleアナリティクス
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56580640-1', 'auto');
  ga('send', 'pageview');



// サンタさん台詞
$(function(){
$(".change").click(function(){
for( i=1; i<19; i++ ){
if( i == 18 ){
j = 1;
}else{
j = i + 1;
}
if( $( ".lines" + i ).css( "display" ) != "none" ){
$( ".lines" + i ).hide();
$( ".lines" + j ).show();
break;
}
}
});
});

// アクセス時表示するモーダルウインドウ
$(function(){
$('#layer_board_area').layerBoard({
	delayTime: 0,
	fadeTime : 500,
	alpha : 0.8,
	limitMin : 1,
	easing: 'swing',
}); 
})


// 実況中継
var asideItemMax = 10;
var asideItemPositions = [];
var asideItemWidth = 100;
var asideItemHeight = 50;
var asideItemMargin = 0;

function initializeAside() {
  asideItemMax = $('.liveItem').length;

  if (asideItemMax > 0) {
    $('#liveItem0 img').load(function(){
      asideItemWidth = $('#liveItem0').width();
      asideItemHeight = $('#liveItem0').height();
	  asideItemMargin = asideItemWidth * 1.0 / 31.0;

      var t = setInterval(asideMoveItems, 4000);

      $('#liveItemParent').height(asideItemHeight);

      for (var i = 0; i < asideItemMax; i++) {
        $('#liveItem' + i).offset({'left': asideGetLeft(i) + asideItemMargin});
        asideItemPositions.push(i);
      }
    });
  }
}

function asideGetLeft(index) {
	return (asideItemWidth + asideItemMargin * 2) * index;
}

function asideMoveItems() {
	for (var i = 0; i < asideItemMax; i++) {
		asideItemPositions[i] = asideItemPositions[i] - 1;
		if (asideItemPositions[i] < -1) {
			asideItemPositions[i] = asideItemPositions[i] + asideItemMax;
			$('#liveItem' + i).offset({'left': asideGetLeft(asideItemPositions[i])});
		} else {
			$('#liveItem' + i).animate({'left': asideGetLeft(asideItemPositions[i])}, 1000);
		}
	}
}

$(window).resize(function() {
	asideResizeItems();
});

function asideResizeItems() {
	asideItemWidth = $('#liveItem0').width();
	asideItemHeight = $('#liveItem0').height();
	asideItemMargin = asideItemWidth * 1.0 / 31.0;

	$('#liveItemParent').height(asideItemHeight);

	for (var i = 0; i < asideItemMax; i++) {
		$('#liveItem' + i).stop();
		$('#liveItem' + i).offset({left: asideGetLeft(asideItemPositions[i])});
	}
}