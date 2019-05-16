$(document).ready(function(){

  // Creo una variabile che mi permette di avere l'ora e i minuti precisi da mettere nei messaggi
  var time= new Date();
  var ora= time.getHours()+":"+ time.getMinutes();

  // Funzione che mi permette di inviare un messaggio sullo schermo da parte dell'utente
  function inviaMessaggioUtente(){
    var text_user=($('.send').val());
      if (text_user) { //la dicitura cosi senza condizione, stà a dire text_user=0
        templateMsg = $(".template-message .new-message").clone()
        templateMsg.find(".text-message").text(text_user);
        templateMsg.find(".time-message").text(ora);
        templateMsg.addClass("sendbyUser");
        $(".conversation").append(templateMsg);
        $(".send").val("");
        setTimeout(stampaMessaggioCpu, 2000);
      }
  }


  // Funzione che mi permette di inviare il messaggio dell'utente nel caso si prema il tasto Invio, cambiando anche l'icona vicino all'input
  $('.send').keydown(function(event){
    if (event.which==13) {
      inviaMessaggioUtente();
    }
    else {
      $('.userKeyboard i').addClass("fa-paper-plane");
    }
  });


  // Funzione con cui vado a ricambiare l'icona una volta che la barra perde il focus
  $(".send").focusout(function(){
    $(".userKeyboard i").removeClass("fa-paper-plane");
  });


  // Funzione che mi permette di ottenere la risposta dell'utente
  function stampaMessaggioCpu(messaggio){
    templateMsg = $(".template-message .new-message").clone()
    templateMsg.find(".text-message").text("Ok.");
    templateMsg.find(".time-message").text(ora);
    templateMsg.find(".info-message i").hide();
    templateMsg.addClass("sendbyCPU");
    $(".conversation").append(templateMsg);
  }

  function ricercaContatto(){
    $('.search').keyup(function(event){
      var cerca_Nome=$('.search').val().toLowerCase();
      $('.privateChat').hide();
      if (cerca_Nome.length>0) {
        $('.privateChat').each(function(){
          nomeCercato=$(this).attr("data-chat-name");
          if (nomeCercato.includes(cerca_Nome)) {
            $(this).show();
          }
        });
      }
    });
  }

  ricercaContatto();
});
