//Registra o serviço contatosAPI no módulo listaTelefonica e passa a dependência de http como parâmetro
angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getContatos = function(){
        return $http.get(config.baseUrl + "Contatos");
    };

    var _getContato = function(id){
        return $http.get(config.baseUrl + "contatos/" + id)
    }
    var _saveContato = function(contato){
        return $http.post(config.baseUrl + "Contatos", contato);
    };
    
    return {
        getContatos: _getContatos,
        getContato: _getContato,
        save: _saveContato
    };
})