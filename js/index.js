  $("p").hide();
  $("#quiz").show(2000);
  function add(){
    $("#answer").show(2000)
  }
  function app(){
    setTimeout("add()",2000)
  }
  app();
  $(".nav").hide();
  $(".nav").show(2000);
  $(".head_portrait").mouseenter(
    function(){
    $(".bokeming").animate({ marginTop:'215px'});

});
  $(".head_portrait").mouseleave(
    function(){
    $(".bokeming").animate({ marginTop:'250px'});

});


