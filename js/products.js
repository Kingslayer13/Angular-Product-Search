angular.module('products', [])
    .controller('ProductsFilterCtrl', function($scope, $http){
        var products = $scope.products = [],
            filterParams =  $scope.filterParams = {},
            brandsFilter = $scope.brandsFilter = {
                'GoPro': true,
                'DOD': true,
                'Aspiring': true,
                'Globex': true,
                'Falcon':true
            },
            filter = $scope.filter = function(){
                for(var brand in brandsFilter){
                    if(brandsFilter.hasOwnProperty(brand)){
                        filterParams[brand] = brandsFilter[brand];
                    }
                }
            };

        $scope.brands = ['GoPro', 'DOD', 'Aspiring', 'Globex', 'Falcon'];

        $http.get("/products").success(function(data){
            data.forEach(function(item){
                products.push(item);
            })
        });

        filter();
    })
;