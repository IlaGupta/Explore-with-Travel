
/Directive/

app.directive('appInfo' , function(){

    return{
        restrict: 'E',
        scope:
        {
            info:'='
        },
        templateUrl: 'js/appInfo.html'
    };

});
