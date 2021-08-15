"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var indexValidator_middleware_1 = require("../middlewares/validators/indexValidator.middleware");
var index_controller_1 = require("../controllers/index.controller");
// router.get('/', indexWelcome);
router.post('/', indexValidator_middleware_1.createTicketSchema, index_controller_1.defaultController);
exports.default = router;
