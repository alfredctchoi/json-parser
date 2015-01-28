(function() {

    'use strict';

    function parseUtility() {

        var service = {};

        service.getProperties = function(obj) {
            var properties = [],
                prop,
                i;

            if (angular.isArray(obj)) {
                for (i = 0; i < obj.length; ++i) {
                    if (!angular.isObject(obj[i])) {
                        continue;
                    }

                    for (prop in obj[i]) {
                        if (obj[i].hasOwnProperty(prop)) {
                        	if (properties.indexOf(prop) === -1) {
                        		properties.push(prop);
                        	}
                        }
                    }
                }
                return properties;
            }

            if (angular.isObject(obj)) {
                for (prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        properties.push(prop);
                    }
                }
                return properties;
            }
            
            return properties;
        };

        return service;

    }


    angular.module('jsonParser.home').factory('parseUtility', parseUtility);

})();
