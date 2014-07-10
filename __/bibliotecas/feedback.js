$(document).ready(function()
{		
	$("input[name='1']").click(function(){
		var n = $(this).val();
		if(n <= 2){
			$("#blJust1").show();	
		}else{
			$("#blJust1").hide();	
		}
	});
	
	$("input[name='2']").click(function(){
		var n = $(this).val();
		if(n <= 2){
			$("#blJust2").show();	
		}else{
			$("#blJust2").hide();	
		}
	});
	
	$('#submit').click(function(){ 
	
		//$('#satisfaction-form').submit();		
		
		var loading = $('#loading');
		var retorno = $('#retorno');
		var form = $('#satisfaction-form');
		var params = form.serialize();
				
		$.ajax({			    
		  type: 'POST',
		  url: urlbase + 'data/record_question/' + call_id,
		  data: params,
		  dataType:"json",
		  
		  beforeSend: function()
		  {				
			  loading.show();
			  loading.html("<p>Registrando...</p>");
		  },	  
		 
		  success: function(txt)
		  {               
			  loading.hide();
			 
			  
			  /*if(txt){
			  	//retorno.html(txt);
				retorno.html('<h3>Obrigado, suas respostas foram recebidas com sucesso!</h3><p>Agradecemos pela participação, sua opinião é muito importante para melhorarmos a qualidade do nosso atendimento. Até breve.</p>');
			  }*/
			  if(txt.status){
 					$('.formfield').hide();
			 		$('#submit').hide();
			  		$('#attention').hide();								  
			  		retorno.show();
					retorno.html('<h3>Obrigado, suas respostas foram recebidas com sucesso!</h3><p>Agradecemos pela participação, sua opinião é muito importante para melhorarmos a qualidade do nosso atendimento. Até breve.</p>');
			  }else{
				  retorno.show();
				  $(txt.hide).hide();
				  $(txt.local).show();
				  $(txt.local).html(txt.msg);
			  }
		  },
  
		  error: function(txt)
		  {
			  loading.hide();
			  retorno.show();
			  retorno.html(txt);
		  }	
		});			
	});
});