angular.module('products')
    .filter('matrixFilter', function () {
        return function (items, matrix) {
            var results = [];

            angular.forEach(items, function (item) {
                if(item.resolution >= matrix.min && item.resolution <= matrix.max){
                    results.push(item);
                }
            });
            return results;
        };
    })
;