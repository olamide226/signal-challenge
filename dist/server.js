"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var HttpException_utils_1 = __importDefault(require("./utils/HttpException.utils"));
var error_middleware_1 = require("./middlewares/error.middleware");
var morgan_1 = __importDefault(require("morgan"));
// Routes
var index_route_1 = __importDefault(require("./routes/index.route"));
var App = /** @class */ (function () {
    function App() {
        this.port = 3000;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }
    App.prototype.settings = function () {
        this.app.set('port', this.port);
    };
    App.prototype.middlewares = function () {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    };
    App.prototype.routes = function () {
        this.app.use('/', index_route_1.default);
        this.app.all('*', function (req, res, next) {
            var err = new HttpException_utils_1.default(404, 'Endpoint Not Found');
            next(err);
        });
    };
    App.prototype.errorHandler = function () {
        // Error middleware
        this.app.use(error_middleware_1.errorMiddleware);
    };
    App.prototype.listen = function () {
        this.app.listen(this.app.get('port'));
        console.log("\uD83D\uDE80 Server running on port " + this.app.get('port') + "!");
    };
    return App;
}());
exports.App = App;
