"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultController = void 0;
var express_validator_1 = require("express-validator");
var axios_1 = __importDefault(require("axios"));
var index_model_1 = require("../models/index.model");
var HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
// function checkValidation (req: Request, res) {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         const err =  new HttpException(422, 'Validation failed', errors);
//         next(err)
//     }
// }
function defaultController(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, err, result, tag, webhook_url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        err = new HttpException_utils_1.default(422, 'Validation failed', errors);
                        return [2 /*return*/, next(err)
                            // throw err;
                        ];
                        // throw err;
                    }
                    return [4 /*yield*/, index_model_1.createTicket(req.body.user_id, req.body.title)
                            .catch(function (err) {
                            throw new HttpException_utils_1.default(500, err.message);
                        })];
                case 1:
                    result = _a.sent();
                    if (!req.body.tags.length) return [3 /*break*/, 3];
                    return [4 /*yield*/, index_model_1.createTags(result[0], req.body.tags)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, index_model_1.getHighestTag()];
                case 4:
                    tag = _a.sent();
                    webhook_url = "https://webhook.site/7fdde03a-a888-4567-af36-2c6a4f795efc?";
                    return [4 /*yield*/, axios_1.default.get(webhook_url + "highest_count_tag=" + JSON.stringify(tag.tag))
                            .catch(function (err) {
                            console.log('Error: ', err.message);
                        })];
                case 5:
                    _a.sent();
                    return [2 /*return*/, res.send({ type: 'success' })];
            }
        });
    });
}
exports.defaultController = defaultController;
