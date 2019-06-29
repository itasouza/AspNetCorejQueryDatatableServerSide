$(document).ready(function(){

	definirDatePicker();
	$('.cep').mask('00000-000');
	$('.telefone').mask('(00)00000-0000');
	$('.campovalor').mask('#.##0,00', {reverse: true});
    $('.cpf').mask('000.000.000-00', { reverse: true });
	$('.cnpj').mask('00.000.000/0000-00', { reverse: true });
	

});

$(document).ready(function() {
	$('#dados').DataTable({
	  "paging":   true,
			"bFilter" : false,               
	  "bLengthChange": false,
	  "searching":false,
	  "ordering": true,
	  "bSort": false,
	  "info":     true,
	  "language": {
		"lengthMenu": "Display _MENU_ records per page",
		"zeroRecords": "Não existe registros para visualização",
		"info": "Mostrando página _PAGE_ de _PAGES_",
		"infoEmpty": "No records available",
		"infoFiltered": "(filtered from _MAX_ total records)",
		"paginate": {
		   "previous": "Página Anterior",
			"next": "Próxima página"
		 }
	 }
	});
   } 
);



function definirDatePicker() {
    $.fn.datepicker.dates['pt-BR'] = {
        days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        monthsTitle: 'Meses',
        clear: 'Limpar',
        format: 'dd/mm/yyyy'
    };

    $('.campodata').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });
}

$(document).ready(function() {
 $('[data-toggle="popover"]').popover();
});


//selecione um arquivo.
function bs_input_file() {
	$(".input-file").before(
		function() {
			if ( ! $(this).prev().hasClass('input-ghost') ) {
				var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
				element.attr("name",$(this).attr("name"));
				element.change(function(){
					element.next(element).find('input').val((element.val()).split('\\').pop());
				});
				$(this).find("button.btn-choose").click(function(){
					element.click();
				});
				$(this).find("button.btn-reset").click(function(){
					element.val(null);
					$(this).parents(".input-file").find('input').val('');
				});
				$(this).find('input').css("cursor","pointer");
				$(this).find('input').mousedown(function() {
					$(this).parents('.input-file').prev().click();
					return false;
				});
				return element;
			}
		}
	);
}
$(function() {
	bs_input_file();
});