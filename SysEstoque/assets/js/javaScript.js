$(document).ready(function(){
	//FUNCAO DE AUTOFOCUS NO MODAL
        $('#addUser').on('shown.bs.modal', function () {
          $('#nameUser').trigger('focus')
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