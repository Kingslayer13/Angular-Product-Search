angular.module('products')
    .filter('priceFilter', function () {
        return function (items, price) {
            var results = [];

            price.min = price.min || 0;
            price.max = price.max || new Number(Infinity);

            angular.forEach(items, function (item) {
                if(item.price >= price.min && item.price <= price.max)
                    results.push(item);
            });
            return results;
        };
    })
;