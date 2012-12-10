(function ($) {

	var gMap;

	var generateMap = function(){
	
		gMap = new google.maps.Map(document.getElementById('worldMap'), { 
				zoom:1,
				mapTypeId: google.maps.MapTypeId.HYBRID,
				center: new google.maps.LatLng(0,0)
		} );	
	};	
		
	$(function(){
	
		if(document.getElementById('worldMap'))
		{	
			generateMap();
		}

	});
	
})(jQuery);