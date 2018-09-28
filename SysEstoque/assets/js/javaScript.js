$(document).ready(function(){
	/* MUDAR O BOTÃO DO SIDEMENU */
	$('#sidenavToggler').click(function() {
		$(this).find('#iconTrade').toggleClass('fas fa-angle-right fas fa-angle-left');
	});
	/* LIMPAR OS CAMPOS NO MODAL AO FECHAR */
	$('.modal').on('hidden.bs.modal', function() {
		$(this).find('input').val('');
	});
/* FUNÇÃO PARA CHECAR SENHA */
$("#Senha").keyup(checkPasswordMatch);
$("#ConfSenha").keyup(checkPasswordMatch);
});
/* VALIDAR SENHA*/
function validarSenha(){
	Senha = document.getElementById('Senha').value;
	ConfSenha = document.getElementById('ConfSenha').value;
	if (Senha != ConfSenha) {
		$("#divAlerta").html("<span class='alert alert-danger' role='alert'> Senhas diferentes, por favor digitar senhas iguais! </span>").fadeToggle(7000);
		/*alert("SENHAS DIFERENTES!\nFAVOR DIGITAR SENHAS IGUAIS");*/
		document.getElementById("ConfSenha").focus();
		console.log('Senha Diferente') 
		return false;
	}
	return true;
	console.log('Senha IGUAIS')
}

function checarSenha(){
	var Senha = $("#Senha").val();
	var ConfSenha = $("#ConfSenha").val();

	if(Senha != ConfSenha){
		$("#divCheck").html("<span style='color: red'> Senhas <strong>diferentes!</strong> </span>");
	}else{
		$("#divCheck").html("<span style='color: green'> Senhas <strong>iguais!</strong> </span>");
	}
}