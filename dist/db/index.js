"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knex = knex_1.default({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'P3rf3ct0u$',
        database: 'test',
        port: 3306
    }
});
exports.default = knex;
