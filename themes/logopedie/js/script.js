(function ($) {

	var gMap;
	var buttonCenter = $("h3 a");
	var coordName= $(".coordMap");
	var geocoder;

	var generateMap = function(){
	
		gMap = new google.maps.Map(document.getElementById('worldMap'), { 
				zoom:2,
				mapTypeId: google.maps.MapTypeId.HYBRID,
				center: new google.maps.LatLng(35,-30)
		} );	
	};	
	
		var collectMarker = function()
		{
			var titreMark;
			var positionMark;
			
			for(var i=0;i<coordName.length;i++){	
				
				titreMark = $(coordName[i]).parent().prev().children().filter("a").text();
				
				geocoder = new google.maps.Geocoder();
				geocoder.geocode( { 'address': $(coordName[i]).text()}, function(results, status) { 
		
					if(status==google.maps.GeocoderStatus.OK){
					positionMark = results[0].geometry.location;					
					
					}
					else
					{				
					positionMark = new google.maps.LatLng(0,0);
					}
				
				addMarker(titreMark, positionMark);
				});

			}
		}
		
		var addMarker = function(titreMark, positionMark){
				
			var gmarker = new google.maps.Marker({
				map: gMap,
				position: positionMark,
				title:titreMark
			});
		};
		
		var zoomMarker = function(){
			var positionMarker;
			var centerMarker;
			var namePlace = $(this).parent().next().children().filter(".coordMap").text();
			gMap.setZoom(5);
			
			positionMarker = new google.maps.Geocoder();
			positionMarker.geocode( { 'address': namePlace}, function(results, status) { 
		
					if(status==google.maps.GeocoderStatus.OK){
					centerMarker = results[0].geometry.location;					
					
					}
					else
					{				
					centerMarker = new google.maps.LatLng(0,0);
					}
			
				gMap.setCenter(centerMarker); 
			});
		};
	
	var showCenter = function(){	

		if(!($(this).hasClass('active')))
		{
			buttonCenter.parent().next().slideUp('normal');
			buttonCenter.parent().children().filter("span").text(">");
		}	
		
		buttonCenter.removeClass('active');
		
		$(this).addClass('active');
		
		$(this).parent().next().slideDown("normal");
		$(this).parent().children().filter("span").text("v ");
		

	
	};
		
	$(function(){
	
		if(document.getElementById('worldMap'))
		{			
			generateMap();
			
			buttonCenter.parent().next().hide();

			buttonCenter.on("click", showCenter);
			buttonCenter.on("click", zoomMarker);
			
			collectMarker();

		}

	});
	
})(jQuery);