angular.module('products')
    .factory('Product', function(){
        return function(){
            this.title = "";
            this.price = new Number();
            this.brand = "";
            this.resolution = new Number();
        }
    })
;