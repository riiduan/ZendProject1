//$('.sidebar-container').toggleClass('active');
$('.sidebar-container .btn').click(function(){
	$(this).parent().toggleClass('active');

	if($(this).parent().hasClass('active')){
		$('.sidebar-container .btn').animate({
			left: "195"
		},30,function(){
			$('.sidebar-container .btn i').removeClass('fa-cog').addClass('fa-close');	
		});
		
		/*$('.sidebar-container .btn').css("left","195px");*/
	}
	else{
		$('.sidebar-container .btn').animate({
			left: "300"
		},300,function(){
			$('.sidebar-container .btn i').removeClass('fa-close').addClass('fa-cog');	
		});
		/*$('.sidebar-container .btn').css("left","300px");*/
	}
	/*$('.sidebar-container .btn i').removeClass('fa-close').addClass('fa-cog');*/
	
	/*$(this).parent().animate({
		left: "-=300"
	},25,function(){

	$('.sidebar-container .btn i').toggleClass('fa-close');
		
	});*/
});



