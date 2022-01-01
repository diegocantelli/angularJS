angular.module("listaTelefonica").config(function($routeProvider){
   $routeProvider.when("/contatos", {
       templateUrl: "../../views/contatos.html"
   });
});