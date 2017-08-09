
//Get JSON from file
app.factory('taskFactory', function($http){
    return {
        get: function(){
            return $http.get('task.json');
        }
    };
});