


//UI-ROUTER for routing between pages/views
app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        
    $urlRouterProvider.otherwise('task1');
    

    $stateProvider
    .state('task1', {
        url: "/task1",
        views: {
            content: {
                templateUrl: 'views/task1.html',
                controller: function($scope){
                    console.log('$scope1 ', $scope.image);
                }
            }
        }
    })
    .state('view-details', {
        url: "/view-details/",
        params: {details: null},
        views: {
            content: {
                templateUrl: 'views/view-details.html'
            }
        }
    });
}]);