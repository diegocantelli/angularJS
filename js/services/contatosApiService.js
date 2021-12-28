//Registra o serviço contatosAPI no módulo listaTelefonica e passa a dependência de http como parâmetro
angular.module("listaTelefonica").factory("contatosAPI", function($http){
    var _getContatos = function(){
        return $http.get("https://localhost:44343/api/Contatos");
    };
    
    return {
        getContatos: _getContatos
    };
})