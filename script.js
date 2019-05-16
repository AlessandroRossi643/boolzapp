$(document).ready(function(){

  function textMessageUser(){
    // Funzione che si attivi al press del tasto invio (evento 13)
    $('.userKeyboard').keydown(function(event){
      // Dichiaro una variabile key con operatore condizionale, che fa partire la funzione al momento che la var risulta falsa
      var key = (event.keyCode ? event.keyCode : event.which)
      // Condizione per cui se l'evento è uguale a 13 quindi al click del tasto invio, la funzione può attivarsi
      if (key==13) {
        // Vado a prendere con l'attributo val l'input dell'utente
        var text_user=($('.send').val());
        // Controllo che l'utente abbia inserito qualcosa
        if (text_user) {
          // Creo un div con all'interno il testo scritto dall'utente
          var textPage = $("<p></p>").text(text_user);
          // Aggiungo la classe sendbyUser per dargli le caratteristiche giuste e uso l'append per inserirlo in fondo alla pagina html
          $(textPage).addClass("sendbyUser");
          $(".conversation").append(textPage);

          // Azzero il value dell'utente
          text_user=($('.send').val(""));
        }
      }
    });
  };

  function textReplyCpu(messaggio){
    $('.userKeyboard').keydown(function(event){
      var key = (event.keyCode ? event.keyCode : event.which)
      var reply;
      if (key==13){
        //Creo una variabile collegata ad una funzione temporale che si attiva dopo due secondi
         reply = setTimeout(function(){

           var textCpu=$("<p></p>").text("Ok");
           $(textCpu).addClass("sendbyCPU");
           $(".conversation").append(textCpu); }, 2000);
      }
    });
  };


      $('.searchChat').click(function(){
        var nomeCercato=$('.search').val();
        $('.privatesChat').hide();
        $('.name').each(function(){
          if ($(this).text().toLowerCase()==nomeCercato.toLowerCase()) {
            $(this).show();
          };
        });
      });


  textMessageUser();
  textReplyCpu();

});
