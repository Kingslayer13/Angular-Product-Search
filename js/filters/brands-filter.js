angular.module('products')
    .filter('brandsFilter', function () {
        return function (items, searchParams) {
            var results = [];
            angular.forEach(items, function (item) {
                for (var param in searchParams) {
                    if (searchParams.hasOwnProperty(param) && searchParams[param] && item.brand == param) {
                        results.push(item);
                    }
                }
            });
            return results;
        };
    })
;