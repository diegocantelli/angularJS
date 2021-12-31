// em config só poderão ser importados os serviços do tipo provider
angular.module("listaTelefonica").config(function(serialGeneratorProvider){
    serialGeneratorProvider.setLength(100);
    console.log(serialGeneratorProvider.getLength());
})