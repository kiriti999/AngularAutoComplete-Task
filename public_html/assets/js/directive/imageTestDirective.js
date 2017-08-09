/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Verify image url onload
app.directive('imageTestDirective', function($http){
   return {
       restrict: 'A',
       link: function($scope, elem, attrs){
           
           attrs.$observe('ngSrc', function(ngSrc){
                if(ngSrc != null){
                    $http.get(ngSrc).then(function(success){
                      $scope.noImage = false;
                       console.log('success loading image', success);
                    }, function(error){
                        $scope.noImage = true;
                        console.log('error loading image', error);
                    });
                }
           });
       }
   }; 
});