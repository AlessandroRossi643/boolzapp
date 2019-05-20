$(document).ready(function(){

  // for (var i = 0; i < conversazioni.length; i++) {
  //   var conversazione_corrente = $('<div class="conversation"></div>');
  //   conversazione_corrente.attr('data-chat-name',i)
  //   if (i==0) {
  //     conversazione_corrente.addClass('active');
  //   }
  //
  //   var messaggi= conversazioni[i];
  //
  //   for (var j = 0; j < messaggi.length; j++) {
  //     var messaggio_corrente = messaggi[j];
  //     var nuovo_messaggio=$('.template-message .new-message').clone();
  //     nuovo_messaggio.children('.text-message').text(messaggio_corrente.text);
  //     nuovo_messaggio.children('.time-message').text(messaggio_corrente.time);
  //     nuovo_messaggio.addClass(messaggio_corrente.type);
  //     conversazione_corrente.append(nuovo_messaggio);
  //   }
  //   $('.conversation').append(conversazione_corrente);
  //   console.log(nuovo_messaggio);
  // }
  // Creo una variabile che mi permette di avere l'ora e i minuti precisi da mettere nei messaggi
  var time= new Date();
  var hours=aggiungiZero(time.getHours());
  var minutes=aggiungiZero(time.getMinutes());
  var ora= hours+":"+ minutes;
  // Funzione che uso per inserire lo zero davanti al numero nel caso i minuti o le ore siano minori di 10
  function aggiungiZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }

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

        var pixelScroll=$('.containChat')[0].scrollHeight;
        $(".containChat").scrollTop(pixelScroll);
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

    var pixelScroll=$('.containChat')[0].scrollHeight;
    $(".containChat").scrollTop(pixelScroll);
  }

  // Funzione che mi permette di cercare un contatto nella barra dei contatti
    $('.search').keyup(function(event){
      var cerca_Nome=$(this).val().toLowerCase();

        $('.privateChat').each(function(){
          var nomeCercato=$(this).find('.name').text().toLowerCase();
          if (nomeCercato.includes(cerca_Nome)) {
            $(this).show();
          }
          else {
            $(this).hide();
          }
        });

    });

  // Funzione che mi permette di aprire un contatto della barra
    $('.privateChat').click(function(){
      var foto=$(this).find("img").attr('src');
      var nome=$(this).find('.name').text();
      $('.titleChat img').attr('src',foto);
      $('.namec').text(nome);

      // var conversazione=$(this).attr('data-chat-name');
      // var schermata_conversazione=$('.[data-chat-name="'+conversazione+'"]');
      // $('.conversation').removeClass('active');
      // schermata_conversazione.addClass('active');
    });


});

  // Lista Conversazioni
  var conversazioni = [
    // Conversazione 1
    [
      {
        'text': 'Tripla doppia ieri sera??',
        'time': '17:41',
        'type': 'sendbyUser'
      },
      {
        'text': 'Yeah, Man',
        'time': '19:02',
        'type': 'sendbyCPU'
      }
    ],
    // Conversazione 2
    [
      {
        'text': 'Senti che flow questa roba',
        'time': '17:50',
        'type': 'sendbyCPU'
      },
      {
        'text': 'https://www.youtube.com/watch?v=xg5RHC-4y-Q',
        'time': '17:52',
        'type': 'sendbyCPU'
      },
      {
        'text': 'Una bomba!',
        'time': '18:59',
        'type': 'sendbyUser'
      }
    ],
    // Conversazione 3
    [
      {
        'text': 'Qua franto?',
        'time': '18:32',
        'type': 'sendbyCPU'
      },
      {
        'text': 'a pra foco',
        'time': '18:56',
        'type': 'sendbyUser'
      }
    ],
    // Conversazione 4
    [
      {
        'text': 'Ndo sei?',
        'time': '18:48',
        'type': 'sendbyUser'
      }
    ],
    // Conversazione 5
    [
      {
        'text': 'GSW REIGN!',
        'time': '17:20',
        'type': 'sendbyCPU'
      }
    ],
    // Conversazione 6
    [
      {
        'text': 'Insegnami a combattere!',
        'time': '10:20',
        'type': 'sendbyUser'
      },
      {
        'text': 'ti piacerebbe',
        'time': '15:20',
        'type': 'sendbyCPU'
      },
    ],
      // Conversazione 7
    [
      {
        'text': 'Ti aspetto a dressRosa',
        'time': '9:40',
        'type': 'sendbyUser'
      }
    ]
  ];
