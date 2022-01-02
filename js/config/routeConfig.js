angular.module("listaTelefonica").config(function($routeProvider){
    // O nome da rota é case sensitive
   $routeProvider.when("/contatos", {
       templateUrl: "../../views/contatos.html",
       //dessa forma não é mais necessário linkar a controller na view, pode ser feito direto na config da rota
       controller: "listaTelefonicaCtrl",
       resolve: {
        contatos: function(contatosAPI){
            return contatosAPI.getContatos();
        },
        operadoras: function(operadorasAPI){
            return operadorasAPI.getOperadoras();
        }
    }
   });

   $routeProvider.when("/novocontato", {
        templateUrl: "../../views/novoContato.html",
        //dessa forma não é mais necessário linkar a controller na view, pode ser feito direto na config da rota
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            }
        }
   });

   $routeProvider.otherwise({redirectTo: "/contatos"});
});