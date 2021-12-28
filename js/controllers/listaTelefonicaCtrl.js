// localizando o módulu listaTelefonica e criando uma controller associada a este módulo
// chamada listaTelefonicaCtrl
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http){
    $scope.app = "Lista Telefonica";
    // $scope.contatos = [
    //     {nome: $filter('uppercase')("Pedro"), data: new Date(), telefone: "9999988888", cor: "yellow"},
    //     {nome: "Ana", data: new Date(),telefone: "9999987777", cor: "blue"},
    //     {nome: "Maria", data: new Date(), telefone: "9999986688", cor: "red"}
    // ];

    var carregarContatos = function(){
        $http.get("https://localhost:44343/api/Contatos")
        .then(function(response) {
            $scope.contatos = response.data;
        })
        .catch(err => console.log("ERRO: ", err));
    }

    var carregarOperadoras = function(){
        $http.get("https://localhost:44343/api/operadoras")
        .then(function(response){
            $scope.operadoras = response.data;
        })
        .catch(err => console.log("ERRO: ", err));
    }

    $scope.contatos = [];

    $scope.adicionarContato = function(contato){
        // angular.copy -> para não utilizar a mesma referência e as ações do input
        // acabarem refletindo no item já adicionado à lista
        // $scope.contatos.push(angular.copy(contato));
        $http.post("https://localhost:44343/api/Contatos", contato).then(function(response){
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

    carregarContatos();
    carregarOperadoras();
});