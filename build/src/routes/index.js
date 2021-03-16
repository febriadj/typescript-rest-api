"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var students_1 = __importDefault(require("../controllers/students"));
var router = express_1.default.Router();
// routes students
router.use('/students', students_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map