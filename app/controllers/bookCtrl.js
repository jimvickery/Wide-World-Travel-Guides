"use strict";
console.log('inside of bookCtrl.js');


app.controller("BookListCtrl", function($scope, $routeParams, GuideFactory) {

    
    GuideFactory.getGuides()
    .then(function(guideCollection) {
        $scope.guideArray = guideCollection;
        // console.log('mushrooms', $scope.mushroom);
        
    });
});