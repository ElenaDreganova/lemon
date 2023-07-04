/*Accordeon JQ*/

  $('.accordeon-jq .head').click(function(){

	  $(this).parent().find('.content').slideToggle(300);

});