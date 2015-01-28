(function() {

    function homeIndexController(parseUtility) {

        this.parse = function(jsonString) {
            try {
                JSON.parse(jsonString)
                this.jsonObject = angular.fromJson(jsonString, true);
                this.getChildProperties(null);
            } catch (e) {
                console.log(e);
            }
        }

        this.getChildProperties = function(propertyName) {

            if (!propertyName && this.jsonObject) {
                this.properties.push(parseUtility.getProperties(this.jsonObject));
                return;
            }

            if (this.jsonObject && this.jsonObject[propertyName] && angular.isObject(this.jsonObject[propertyName])) {
            	this.properties.push(parseUtility.getProperties(this.jsonObject[propertyName]));
                return;	
            }
        }

        this.selectProperty = function(selectedProperty, level) {
            this.selectedProperties[level] = this.selectedProperties[level] || [];
            var existingIndex = this.selectedProperties[level].indexOf(selectedProperty);
            if (existingIndex > -1) {
                this.selectedProperties[level].splice(existingIndex, 1);
            } else {
                this.selectedProperties[level].push(selectedProperty);
                this.getChildProperties(selectedProperty);
            }
        }

        this.init = function() {
        	this.properties = [];
        	this.selectedProperties = [];
        }
    }

    homeIndexController.$inject = ['parseUtility'];

    angular.module('jsonParser.home').controller('homeIndexController', homeIndexController);

})()
