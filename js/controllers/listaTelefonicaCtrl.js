// localizando o módulu listaTelefonica e criando uma controller associada a este módulo
// chamada listaTelefonicaCtrl
//contatosAPI -> serviço criado para a busca de contatos via http
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function(
    $scope, 
    $filter,
    contatos, 
    operadorasAPI,
    serialGenerator){

    $scope.app = "Lista Telefonica";
    $scope.contato = {
        data: 1640919600000
    }

    // $scope.contatos = [
    //     {nome: $filter('uppercase')("Pedro"), data: new Date(), telefone: "9999988888", cor: "yellow"},
    //     {nome: "Ana", data: new Date(),telefone: "9999987777", cor: "blue"},
    //     {nome: "Maria", data: new Date(), telefone: "9999986688", cor: "red"}
    // ];

    $scope.erro = '';
    $scope.contatos = contatos.data; 

    var generateSerial = function(contatos){
        contatos.forEach(function(item){
            item.serial = serialGenerator.generate();
        });
    }
    // var carregarContatos = function(){
    //     contatosAPI.getContatos()
    //         .then(function(response) {
    //             $scope.contatos = response.data;
    //         })
    //         .catch(err => $scope.erro = "Não foi possível carregar a lista de contatos");
    // }

    // var carregarOperadoras = function(){
    //     operadorasAPI.getOperadoras()
    //     .then(function(response){
    //         $scope.operadoras = response.data;
    //     })
    //     .catch(err => $scope.erro ="Não foi possível carregar a lista de operadoras.");
    // }


    $scope.adicionarContato = function(contato){

        contato.serial = serialGenerator.generate();
        // angular.copy -> para não utilizar a mesma referência e as ações do input
        // acabarem refletindo no item já adicionado à lista
        // $scope.contatos.push(angular.copy(contato));
        contatosAPI.save(contato).then(function(response){
            //limpa as referências presentes nesta propriedade, por conta do 2way databind, os inputs
            //tbm serão limpados
            delete $scope.contato;

            $scope.contatoForm.$setPristine(); 

            carregarContatos();
        });
    };

    $scope.apagarContato = function(contatos){
        
        var contatosNaoSelecionados = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
        });

        $scope.contatos = contatosNaoSelecionados;
    }

    $scope.isContatoSelecionado = function(contatos){
        
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    }

    $scope.ordenarPor = function(criterioOrdenacao) {
        $scope.criterioDeOrdenacao = criterioOrdenacao;
        $scope.isDesc = !$scope.isDesc;
    }

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    generateSerial($scope.contatos);
    // carregarContatos();
    // carregarOperadoras();
});