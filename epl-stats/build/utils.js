"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    }); //'28/10/2018' => [28,10,2018]
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
