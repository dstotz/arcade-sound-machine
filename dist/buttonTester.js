"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = require("fs");
const joystick_1 = __importDefault(require("./joystick"));
const [_0, _1, pathOrNameArg, debugArg] = process.argv;
let mapping;
let debug = debugArg ? true : false;
if (!pathOrNameArg)
    throw new Error("No device name or path provided");
try {
    const mappingYamlPath = path_1.default.resolve(pathOrNameArg);
    mapping = js_yaml_1.default.load((0, fs_1.readFileSync)(mappingYamlPath, "utf8"));
}
catch (_a) {
    mapping = { device: { name: pathOrNameArg } };
}
const showButtonInfo = (event) => {
    console.log(event);
};
(0, joystick_1.default)({
    mapping,
    onEvent: showButtonInfo,
    onReady: () => {
        console.log("Waiting for input...");
    },
    debug,
});
//# sourceMappingURL=buttonTester.js.map