

//TaskController -- Uses factory and service
app.controller('task1Controller',['$scope', 'taskFactory', '$state', 'task1Service', function($scope, taskFactory, $state, task1Service){

    $scope.taskData = {};
    $scope.current = 0;

    //Get Json data 
    taskFactory.get().then(function(response){
        $scope.jsonData = response.data.data.resultCareGivers;
       
    });
    
    
    //view details with routing
    $scope.viewDetails = function(){
        $state.go('view-details', {details: $scope.jsonData[$scope.current]});
    };
    
    
    //Go to previous json object
    $scope.back = function(){
        $scope.current = ($scope.current !== 0 ? $scope.current - 1 : 0);
    };
    
    
    //Go to next json object
    $scope.next = function(){
        $scope.current = ($scope.current !== $scope.jsonData.length-1 ? $scope.current + 1 : $scope.jsonData.length-1);
    };
    
    
    //Autocomplete
    $scope.complete = function(searchKey){
        $scope.hidethis = false;
        var output = [];
         angular.forEach($scope.jsonData, function(value, key, obj){
            if(value.firstName.toLowerCase().indexOf(searchKey.toLowerCase()) >=0 ){
                output.push(value)
            }
            $scope.filterData = output;
        })
    }
    
    
    //Get selected autocomplete value
    $scope.fillTextBox = function(obj){
        $scope.selectedObj = obj;
        $scope.username = obj.firstName;
        $scope.hidethis = true;
    };
    
    
    //Set selected autocomplete value to form
    $scope.setForm = function(user){
        $scope.jsonData.forEach(function(el, i){
            if(el._id == user._id){
                $scope.current = i;
                return false;
            }
        });
    };
    
    
    //save form
    $scope.save = function(data){
        task1Service.save(data);
    };
    
}]);