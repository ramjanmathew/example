$('a.button').on('click', function(){
  $('.wrap, a').toggleClass('active');
  
  return false;
});

$('a.button.ar').on('click', function(){
  $('.wrap1, a').toggleClass('active');
  
  return false;
});

$('a.button.ara').on('click', function(){
  $('.wrap2, a').toggleClass('active');
  
  return false;
});

$('a.button.aran').on('click', function(){
  $('.wrap3, a.button.aran').toggleClass('active');
  
  return false;
});
$('a.button.arana').on('click', function(){
  $('.wrap4, a.button.aran').toggleClass('active');
  
  return false;
});

$("#table tr").click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');    
   var value=$(this).find('td:first').html();
   alert(value);    
});

$('.ok').on('click', function(e){
    alert($("#table tr.selected td:first").html());
});

function validateForm() {
	var x = document.getElementByName("radio1").value;
	if(x.checked){
		alert("The 1st Installment should be released");
		return false;

	}

}