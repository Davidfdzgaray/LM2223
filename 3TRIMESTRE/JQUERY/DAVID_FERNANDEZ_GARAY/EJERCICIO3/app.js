$(document).ready(function () {

    $("button").click(function(event) {
        event.preventDefault();
    }); 
    
    $("#vuelta").attr('disabled','disabled');

    $('button').click(function () {
        caracteres = "QWQERTYUIOPASDFGHJKLÑZXCVBNM";
        longitud = 12;
        
        function rand_code(chars, lon){
            code = "";
            for (x=0; x < lon; x++)
            {
            rand = Math.floor(Math.random()*chars.length);
            code += chars.substr(rand, 1);
            }
            return code;
        }
            
        var localizador=rand_code(caracteres, longitud);
        var nombre=$("#name").val();
        var apellidos=$("#surname").val();
        var dni=$("#dni").val();
        var email=$("#email").val();
        var ida = $("#ida").val();
        var vuelta = $("#vuelta").val();

        if ($('#idayvuelta').is(':checked')) {
            var qr = nombre+apellidos+dni+email+ida+vuelta+localizador;
            var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qr;

            $("#resumen").html(
                '<p>Nombre: '+nombre+'</p>' + 
                '<p>Apellidos: '+apellidos+'</p>' + 
                '<p>Email: '+email+'</p>' + 
                '<p>DNI: ' + dni + '</p>'+
                '<p>Fecha de ida: ' + ida + '</p>'+
                '<p>Fecha de vuelta: ' + vuelta + '</p>'+
                '<p>Localizador: ' + localizador + '</p>'+
                '<p>'+'<img width="200" src="'+url+'"></p>'
            );
        }
        else {
            var qr = nombre+apellidos+dni+email+ida+localizador;
            var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qr;

            $("#resumen").html(
            '<p>Nombre: '+nombre+'</p>' + 
            '<p>Apellidos: '+apellidos+'</p>' + 
            '<p>Email: '+email+'</p>' + 
            '<p>DNI: ' + dni + '</p>'+
            '<p>Fecha de ida: ' + ida + '</p>'+
            '<p>Localizador: ' + localizador + '</p>' +
            '<p>'+'<img width="200" src="'+url+'"></p>'
            );
        }
    });

    //CHECKBOX ACT/DESC
    $('#idayvuelta').click(function () {
        if ($('#idayvuelta').is(':checked')) {
            $("#vuelta").removeAttr('disabled');
        }
        else {
            $("#vuelta").attr('disabled','disabled');
        }
    })
   
});

//DATEPICKER
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);

$('#ida').datepicker({
    minDate: +1,
    maxDate: "+1M"
});

$('#vuelta').datepicker({
    minDate: +1
});

$(document).on('change', '#ida', (event) => {
    const element = event.target;
    console.log(element.value);
    jQuery('#vuelta').datepicker('option', 'minDate', element.value);
});