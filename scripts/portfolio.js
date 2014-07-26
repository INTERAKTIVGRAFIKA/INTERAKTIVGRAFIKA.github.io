
$(document).ready(function(){

	$(".alpanel").hide();
	$("#keppanel1").show();

	function mutat(){
		var N = $(this).attr("id").substr(-1);
  	$(".alpanel").hide();
		$("#keppanel" + N ).show();
	};
	
	$(".kiskep").bind("focus",mutat);	
	$(".kiskep").bind("mouseover",mutat);

});