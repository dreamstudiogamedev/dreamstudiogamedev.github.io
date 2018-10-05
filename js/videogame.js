
var currentImage=0;
var numImages=0;
function Init ()
{
	//SliderHTML();
	//startSlider();
	
	$('.navMenuContainer').fadeIn(1000).css("display","flex");
	$('.topic').fadeIn(1000).css("display","flex");

	SetMenuActions();	
}

//Creamos el slider utilizando las imágenes que se encuentran dentro del array
function SliderHTML()
{
	var listDefaultImgs=[  "media/phill.jpg","media/choco.png","media/marine.jpg","media/slender.jpg","media/way.png"];
	var currentDefImage=0;
	var totalDefImgs = listDefaultImgs.length;
	this.numImages = listDefaultImgs.length;
	
	var newHTML="";
	for(let i=0;i< totalDefImgs;i++)
	{
		newHTML += '<div id="'+i+'" class="imgContainerSlider" style="';
		if(i == 0)
		{
			newHTML+='left:0%;';
		}
		else
			newHTML+='left:-100%;';
		newHTML += '"><div class="imgSlider"  style="background-image:url('+listDefaultImgs[currentDefImage]+');">';
	
		newHTML+='</div></div>';
		currentDefImage++;
		if(currentDefImage==totalDefImgs)
			currentDefImage=0;

	}

	$(".slider").html(newHTML);

};

//Anima los contenedores de las imagenes para que parezca una "cinta"
function startSlider()
{
	var This= this;

	setInterval(function ()
	{


	console.log(this.numImages);
	$( "#"+This.currentImage+"" ).animate({

	    left: "100%"

	  }, 2000, function() {
	    // Animation complete.

	    $(this).css("left", "-100%");
	 
	  });
	  
		This.currentImage++;
		if(This.currentImage>=This.numImages)
			This.currentImage=0;

		$( "#"+This.currentImage+"" ).animate({

	    left: "0"

	  }, 2000);

		

	}, 3000);	
};

//Da los comportamientos correspondientes al menú
function SetMenuActions ()
{
	
	$(".itemMenu").on('click', function(event)
	{
	    console.log(event);
	    var id = event.currentTarget.attributes[1].value;
	    var target = $('#'+id);	    
	    if( target.length )
	    {
		event.preventDefault();
		$('html, body').stop().animate({
		    scrollTop: target.offset().top
		}, 1000);
	    }
	});
	$(".ItemGallery").on('click', function(event)
	{
		if($(this).hasClass("ItemGalleryClick"))
			$(this).removeClass("ItemGalleryClick");
		else
			$(this).addClass("ItemGalleryClick");
	})


}
