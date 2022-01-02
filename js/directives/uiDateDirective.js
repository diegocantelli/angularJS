angular.module("listaTelefonica").directive("uiDate", function($filter){
    return {
        require: "ngModel", //informa que a api do ngModel será acessível nesta diretiva
        //link -> executada depois do template ter sido carregado. Podemos utilizar para interagir com o DOM e eventos
        //ctrl -> é o controle de ngMolde, através dele poderemos acessar a api de ngModel
        link: function(scope, element, attrs, ctrl){

            var _formatDate = function(date){
                date = date.replace(/[^0-9]+/g,"");

                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }

                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }

                return date;
            }
            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            //só irá devolver o valor pro scope caso a condição seja verdadeira
            ctrl.$parsers.push(function(value){
                if(value.length === 10){
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getDate();
                    // return value;
                }
            });

            //pega o valor recebido no scope e aplica este formatador
            ctrl.$formatters.push(function(value){
               return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});