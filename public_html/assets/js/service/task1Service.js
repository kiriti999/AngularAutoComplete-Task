

//Service to save form using http
app.service('task1Service', function($http){
   
   this.save = function(data){
       console.log('AJAX CALL INSIDE SERVICE... ',"FIRST NAME: ", data.firstName, ", LAST NAME: ", data.lastName, ", EMAIL: ", data.email, ", ID: ", data._id);
       alert('Saved Successfully!');
       $http({
        url: '/save',
        method: "POST",
        data: { 'userData' : data }
        
        })
        .then(function(response) {
                
        }, 
        function(response) { // optional
                // failed
        });
   };
});