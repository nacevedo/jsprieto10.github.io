"use strict"; // comienzo del uso estricto

 // iniciar las comunicación con el servidor
(function(){emailjs.init("user_CzQmkPEa1uH2iEAMTzt2a"); })();


// servidor para mandar correo de una manera más rápida
$('#send').click(function(){
  var name = $('#nombre');
  var email = $('#email');
  var phone = $('#celular');
  var message = $('#mensaje');
  emailjs.send("gmail","template_BZGiJMnO",{nombre: name.val(), correo: email.val(), celular: phone.val(), mensaje: message.val()})
  .then(function(response) {
    name = $('#nombre').val('');
    email = $('#email').val('');
    phone = $('#celular').val('');
    message = $('#mensaje').val('');
    alert('se ha enviado correctamente');
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  },function(err) {console.log("FAILED. error=", err);});

  history.replaceState({}, document.title, ".");

});
