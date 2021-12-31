// Pode-se usar diretivas para reutilizar componentes visuais
angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "../../views/alert.html",
        restrict: "AE" //o elemento poderá ser invocado via <div ui-alert></div> ou <ui-alert></ui-alert>
    };
});