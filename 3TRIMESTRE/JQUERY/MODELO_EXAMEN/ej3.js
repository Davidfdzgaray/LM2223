$( function() {
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
   
    $('#f_entrada, #f_salida').datepicker({
        minDate: new Date(),
        maxDate: "+1Y"
    });

    $(document).on('change', '#f_entrada', (event) => {
        const element = event.target;
        console.log(element.value);
        jQuery('#f_salida').datepicker('option', 'minDate', element.value);
    });
});

$('document').ready(function(){
    $('#calculo').click(function () {
        var total = parseFloat($('#num_individuales').val()*25) + parseFloat($('#num_dobles').val()*45) + parseFloat($('#num_triples').val()*80);
        
        var fechaInicio = new Date($('#f_entrada').val()).getTime();
        var fechaFin    = new Date($('#f_salida').val()).getTime();
        var diff = fechaFin - fechaInicio;
        var dias = diff/(1000*60*60*24);
        if (dias == 0) {
            $('#totalDias').html('Los días de entrada y salida no pueden ser el mismo');  
            $('#totalPrecio').html('0');
        }
        else if ($('#f_entrada').val() == "" || $('#f_salida').val() == "") {
            $('#totalDias').html('La fechas deben ser rellenadas'); 
            $('#totalPrecio').html('0'); 
        }
        else if ($('#f_entrada').val() > $('#f_salida').val()) {
            $('#totalDias').html('La fecha de entrada no puede ser posterior a la de salida'); 
            $('#totalPrecio').html('0'); 
        }
        else {
            $('#totalDias').html(dias);
            $('#totalPrecio').html(total);
        }
    })
});


