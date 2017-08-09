

//Controller to view selected details
app.controller('viewDetailsController', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state){
    console.log('receiveing $stateParams.details ', $stateParams.details);
    
    $scope.stateData = $stateParams.details;
}]);