angular.module("listaTelefonica").controller("novoContatoCtrl", function(
    $scope, 
    $location,
    contatosAPI,
    operadorasAPI,
    serialGenerator){

    $scope.app = "Lista Telefonica";
    $scope.contato = {
        // data: 1640919600000
    }

    $scope.erro = '';
    
    $scope.contatos = [];

    var carregarOperadoras = function(){
        operadorasAPI.getOperadoras()
        .then(function(response){
            $scope.operadoras = response.data;
        })
        .catch(err => $scope.erro ="Não foi possível carregar a lista de operadoras.");
    }

    $scope.adicionarContato = function(contato){

        contato.serial = serialGenerator.generate();
        
        contatosAPI.save(contato).then(function(response){
            
            delete $scope.contato;

            $scope.contatoForm.$setPristine(); 

            $location.path("/contatos");
        });
    };

    carregarOperadoras();
});