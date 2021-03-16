"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var Connection = /** @class */ (function () {
    function Connection(host, user, pass, name) {
        this.dbHost = host;
        this.dbUser = user;
        this.dbPass = pass;
        this.dbName = name;
    }
    Connection.prototype.dbCreate = function () {
        var db = mysql_1.default.createConnection({
            host: this.dbHost,
            user: this.dbUser,
            password: this.dbPass,
            database: this.dbName
        });
        db.connect(function (err) {
            if (err)
                return new Error(err);
            return console.log('mysql connected');
        });
        return db;
    };
    return Connection;
}());
var mysqlConfig = {
    host: 'localhost',
    user: 'root',
    pass: '',
    name: 'db_projects'
};
var host = mysqlConfig.host, user = mysqlConfig.user, pass = mysqlConfig.pass, name = mysqlConfig.name;
var conn = new Connection(host, user, pass, name).dbCreate();
exports.default = conn;
//# sourceMappingURL=db.js.map