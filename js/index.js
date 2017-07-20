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
