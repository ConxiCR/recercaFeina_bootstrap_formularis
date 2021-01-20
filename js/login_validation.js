$(function() {

/* trozo de código SOLO para Bootrstrap 4 */
  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

//login-form

$("#login-form").validate({
	rules: {
		"login-email": {
			required: true,
			email: true
		},
		"login-password": {
			required: true,
			minlength: 5
		}
	},

	messages: {
		"login-email": {
			required: "Aquest camp és obligatori.",
			email: "Si us plau, escriu una adreça de correu vàlida",
		},
		"login-password": {
			required: "Aquest camp és obligatori.",
			minlength: "Si us plau, no escriguis menys de {6} caracters.",
		},
	}
});


$('#login-form').on('submit', function() {

  if ($('#login-form').valid()) {
    alert("formulari validat");
    //form.submit();
  } else {
      alert("formulari no validat");
  }
 
});


});




