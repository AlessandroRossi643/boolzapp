$(document).keydown(function(event){
  var key = (event.keyCode ? event.keyCode : event.which)
  if (key==13) {
    var text_user=($('.send').val());
    if (text_user!="") {
      var textPage = $("<div></div>").text(text_user)
      $(textPage).addClass("sendbyUser");
      $(".user").append(textPage);
      text_user=($('.send').val(""));
    }
  }
});
