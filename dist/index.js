"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
function main() {
    var app = new server_1.App();
    app.listen();
}
main();
