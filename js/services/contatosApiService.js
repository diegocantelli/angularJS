//Registra o serviço contatosAPI no módulo listaTelefonica e passa a dependência de http como parâmetro
angular.module("listaTelefonica").factory("contatosAPI", function($http){
    var _getContatos = function(){
        return $http.get("https://localhost:44343/api/Contatos");
    };

    var _saveContato = function(contato){
        return $http.post("https://localhost:44343/api/Contatos", contato);
    };
    
    return {
        getContatos: _getContatos,
        save: _saveContato
    };
})