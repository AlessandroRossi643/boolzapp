// Funzione che si attivi al press del tasto invio (evento 13)
$(document).keydown(function(event){
  // Dichiaro una variabile key con operatore condizionale, che fa partire la funzione al momento che la var risulta falsa
  var key = (event.keyCode ? event.keyCode : event.which)
  // Condizione per cui se l'evento è uguale a 13 quindi al click del tasto invio, la funzione può attivarsi
  if (key==13) {
    // Vado a prendere con l'attributo val l'input dell'utente
    var text_user=($('.send').val());
    // Controllo che l'utente abbia inserito qualcosa
    if (text_user!="") {
      // Creo un div con all'interno il testo scritto dall'utente
      var textPage = $("<div></div>").text(text_user)
      // Aggiungo la classe sendbyUser per dargli le caratteristiche giuste e uso l'append per inserirlo in fondo alla pagina html
      $(textPage).addClass("sendbyUser");
      $(".user").append(textPage);
      // Azzero il value dell'utente
      text_user=($('.send').val(""));
    }
  }
});
