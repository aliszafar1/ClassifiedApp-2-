System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters:[],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = [];
                }
                DataService.prototype.getRandomData = function () {
                    return this._data;
                };
                DataService.prototype.insertData = function (data) {
                    this._data.push(data);
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map