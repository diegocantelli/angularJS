//Registra o serviço contatosAPI no módulo listaTelefonica
angular.module("listaTelefonica").factory("contatosAPI", function(){
    var _getContatos = function(){
        return $http.get("https://localhost:44343/api/Contatos");
    };
    
    return getContatos = _getContatos;
})