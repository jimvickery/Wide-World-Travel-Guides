"use strict";
console.log('Gide Factory');


app.factory("GuideFactory", function($q, $http) {    
    
    console.log('Testing Guide Factory');
    
        //get  guides
        const getGuides = () => {
            let guideArray = [];
            return $q((resolve, reject) => {
                // let newObj = JSON.stringify(selected);
                $http.get('./data/guides.json')
                .then((itemObject) => {
                    let guideCollection = itemObject.data;
                    console.log('Test Get Guides', guideCollection);
                    let guideList = guideCollection.guides;

                    Object.keys(guideList).forEach((key) => {
                        guideList[key].id = key;
                        guideArray.push(guideList[key]);
                        console.log('guideArray', guideArray);
                        
                    });
                    resolve(guideArray);
                }) 
                .catch((error) => {
                    reject(error);
                });
            });
        };
    
   


return {getGuides};


});