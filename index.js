
 $(document).ready(function(){
    $('.counter').counterUp({
  delay: 10,
  time: 1500
});

  })


  $(document).ready(function(){

  $('.custom-alert').click(function(){
   $(this).fadeOut(800);
   console.log('clicked')
 })
  })








  $(document).ready(function(){

  $(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});
});























//   $(document).ready(function(){

//   $('#circle').circleProgress({
//     value: 0.75,
//     size: 80,
//     fill: {
//       gradient: ["red", "orange"]
//     }
//   });
// });


  

//    let button=document.getElementById('form-button');
//    button.addEventListener('click',function(){
//        alert("hello");
//    })

  

