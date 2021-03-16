"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var port = 3000;
// config .env file
dotenv_1.default.config({ path: './src/.env' });
// set middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(index_1.default);
app.listen(port, function (err) {
    if (err)
        return new Error(err);
    console.log('server running on port ' + port);
});
//# sourceMappingURL=server.js.map