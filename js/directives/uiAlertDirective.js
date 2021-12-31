// Pode-se usar diretivas para reutilizar componentes visuais
angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        template: "<div>UiAlert</div>"
    };
});