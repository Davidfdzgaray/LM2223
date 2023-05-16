$( function() {
    $( "#f_entrada" ).datepicker({ minDate: 0, maxDate: "+1Y" });
    $( "#f_salida" ).datepicker({ minDate: 0, maxDate: "+1Y" });
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
        else if (fechaInicio>fechaFin) {
            $('#totalDias').html('La fecha de inicio no puede ser mayor que la fecha de salida'); 
            $('#totalPrecio').html('0'); 
        }
        else if ($('#f_entrada').val() == "" || $('#f_salida').val() == "") {
            $('#totalDias').html('La fechas deben ser rellenadas'); 
            $('#totalPrecio').html('0'); 
        }
        else {
            $('#totalDias').html(dias);
            $('#totalPrecio').html(total);
        }
        } 
    )
});


