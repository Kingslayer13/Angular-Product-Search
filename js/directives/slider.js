angular.module('products')
    .directive('slider', function(){
        return {
            restrict: 'C',
            template: '<div id="slider"></div>',
            replace: true,
            scope: true,
            link: function(scope, element, attrs){
                $(function(){
                    $(element).slider({
                        max: 20,
                        min: 2,
                        range: true,
                        step: 1,
                        values: [2, 20],
                        change: function(){
                            scope.$parent.matrixFilter = {
                                min: $(element).slider('values', 0),
                                max: $(element).slider('values', 1)
                            };
                            scope.$parent.$apply();
                        }
                    });
                });


            }
        }
    })
;