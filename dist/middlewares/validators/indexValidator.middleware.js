"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicketSchema = void 0;
var body = require('express-validator').body;
var createTicketSchema = [
    body('user_id')
        .exists()
        .withMessage('user_id is required')
        .isInt(),
    body('title')
        .exists()
        .withMessage('title is required'),
    body('tags')
        .exists()
        .isArray()
        .withMessage('Expecting an array')
        .custom(function (tags) {
        if (tags.length >= 5) {
            tags.map(function (item) { return item.toLowerCase(); });
            return false;
        }
        return true;
    })
        .withMessage('tags length must not be greater than 5')
];
exports.createTicketSchema = createTicketSchema;
