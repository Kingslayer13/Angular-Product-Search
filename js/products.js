angular.module('products', [])
    .controller('ProductsFilterCtrl', function($scope, $http){
        var products = $scope.products = [],
            brandParamsForFilter =  $scope.brandParamsForFilter = {},
            priceParamForFilter = $scope.priceParamForFilter = {},
            matrixParamForFilter = $scope.matrixParamForFilter = {},
            brandsFilter = $scope.brandsFilter = {
                'GoPro': true,
                'DOD': true,
                'Aspiring': true,
                'Globex': true,
                'Falcon':true
            },
            pricesFilter = $scope.pricesFilter = {
                min: new Number(0),
                max: new Number(Infinity)
            },
            matrixFilter = $scope.matrixFilter = {
                min: 2,
                max: 20
            },
            refreshProducts = function(){
                $http.get("/products").success(function(data){
                    products = $scope.products = [];
                    data.forEach(function(item){
                        products.push(item);
                    })
                });
            },
            filterProducts = $scope.filterProducts = function(brands, prices, matrix){
                for(var brand in brands){
                    if(brands.hasOwnProperty(brand)){
                        brandParamsForFilter[brand] = brands[brand];
                    }
                }
                priceParamForFilter.min = prices.min;
                priceParamForFilter.max = prices.max;

                matrixParamForFilter.min = matrix.min;
                matrixParamForFilter.max = matrix.max;
            };

        $scope.brands = ['GoPro', 'DOD', 'Aspiring', 'Globex', 'Falcon'];

        $scope.remove = function(item){
            $http({
                method: 'DELETE',
                url: '/products',
                params: {
                    index: products.indexOf(item)
                },
                headers: {
                    'Accept': 'application/json'
                }
            }).success(function(data){
                if(data) refreshProducts();
            });
        };

        refreshProducts();
        filterProducts(brandsFilter, pricesFilter, matrixFilter);
    })
;