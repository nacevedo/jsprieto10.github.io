"use strict"; // comienzo del uso estricto

 // iniciar las comunicación con el servidor
(function(){emailjs.init("user_CzQmkPEa1uH2iEAMTzt2a"); })();


// servidor para mandar correo de una manera más rápida
$('#send').click(function(){
  // obetener los inputs del formulario
  var name = $('#nombre');
  var email = $('#email');
  var phone = $('#celular');
  var message = $('#mensaje');
  // envio del correo usando la librería
  emailjs.send("gmail","template_BZGiJMnO",{nombre: name.val(), correo: email.val(), celular: phone.val(), mensaje: message.val()})
  .then(function(response) {
    // se ejecuta de manera sincronica esta función que vacia los elementos del arreglo
   
   //Nicolás Acevedo: Revisar por que hacen falta dos clicks para que se borre el formulario, no se borra apenas se da "send por lo que parece que no se estuviera enciando el correo. 
    name = $('#nombre').val('');
    email = $('#email').val('');
    phone = $('#celular').val('');
    message = $('#mensaje').val('');
    alert('se ha enviado correctamente');
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  },function(err) {console.log("FAILED. error=", err);});

  history.replaceState({}, document.title, ".");

});
