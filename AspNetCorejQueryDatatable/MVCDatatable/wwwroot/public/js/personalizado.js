

function DadosFormulario(){

    var camposFormulario = document.querySelectorAll("#formulario [name]");
    var dadosFormulario = {};

    camposFormulario.forEach(function(campo, index){
    
        if(campo.name == "radioFavorito" || campo.name == "termoscontrato" ){
    
          if(campo.checked === true){
             dadosFormulario[campo.name] = campo.value;
            // console.log("sim",campo);
          };
    
        }else{ 
            dadosFormulario[campo.name] = campo.value;
           // console.log(campo.name);
        }
        
    });
    console.log(dadosFormulario);

}

