angular.module("listaTelefonica").directive("uiDate", function(){
    return {
        require: "ngModel", //informa que a api do ngModel será acessível nesta diretiva
        //link -> executada depois do template ter sido carregado. Podemos utilizar para interagir com o DOM e eventos
        //ctrl -> é o controle de ngMolde, através dele poderemos acessar a api de ngModel
        link: function(scope, element, attrs, ctrl){
            element.bind("keyup", function(){
                console.log(ctrl.$viewValue);
            });
        }
    };
});