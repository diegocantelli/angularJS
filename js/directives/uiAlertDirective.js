// Pode-se usar diretivas para reutilizar componentes visuais
angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "../../views/alert.html"
    };
});