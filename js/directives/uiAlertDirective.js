// Pode-se usar diretivas para reutilizar componentes visuais
angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "../../views/alert.html",
        restrict: "AE", //o elemento poderá ser invocado via <div ui-alert></div> ou <ui-alert></ui-alert>
        // deixa de compartilhar o scope com o scope da index
        scope: {
            //topic -> é o bind que a view alert.html está configurada
            //title -> é a propriedade que está recebendo o valor no local onde ela está sendo chamada.
                // Ex: <ui-alert title="texto exemplo"></ui-alert>
            //@ -> vincula com o texto passado na propriedade do elemento
            //= -> vincula com o valor passado na propriedade do elemento. Ao passar uma variável, será carregado
            //     o valor da variável
            topic: "@title",
            erro: "=message"
        }
    };
});