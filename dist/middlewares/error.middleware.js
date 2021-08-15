"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(error, req, res, next) {
    var _a = error.status, status = _a === void 0 ? 500 : _a, message = error.message, data = error.data;
    console.error("[Error] " + error.message);
    // If status code is 500 - change the message to Intrnal server error
    message = status === 500 || !message ? 'Internal server error' : message;
    var errorObject = __assign({ type: 'error', status: status, message: message }, (data) && data);
    return res.status(status).send(errorObject);
}
exports.errorMiddleware = errorMiddleware;
