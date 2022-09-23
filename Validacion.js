$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});


$(document).ready(function () {
    
    $(document).ready(function(){
        $.dobPicker({
          // Selectopr IDs
daySelector: '#dobday',
monthSelector: '#dobmonth',
yearSelector: '#dobyear',

// Default option values
dayDefault: 'Day',
monthDefault: 'Month',
yearDefault: 'Year',

// Minimum age
minimumAge: 18,

// Maximum age
maximumAge: 100
        });
      });

    $('#signupForm').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            comments: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"

        },
        messages: {
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            comments: "Por favor ingresa un comentario",
            password: {
                required: "Por favor ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
            },
            confirm_password: {
                required: "Ingresa un password",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
                equalTo: "Por favor ingresa la misma contraseña de arriba"
            },
            email: "Por favor ingresa un correo válido",
            agree: "Por favor acepta nuestra política",

        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-success").removeClass("has-error");
        }
    });
});

$('[type="checkbox"][name="cbox"]').change(function () {
    $('select.Enfermedades').toggle(this.checked);
});
