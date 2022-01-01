angular.module("listaTelefonica").directive("uiAccordion", function(){
    return {
        templateUrl: "../../views/templateAccordion.html",
        scope: {
            title: "@title"
        }
    }
});