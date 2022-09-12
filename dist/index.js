"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const eventSoundPlayer_1 = require("./eventSoundPlayer");
const joystick_1 = __importDefault(require("./joystick"));
const fs_1 = require("fs");
const mappingYamlPathArg = process.argv[2];
if (!mappingYamlPathArg)
    throw new Error("No mapping file provided");
const mappingYamlPath = path_1.default.resolve(mappingYamlPathArg);
const mapping = js_yaml_1.default.load((0, fs_1.readFileSync)(mappingYamlPath, "utf8"));
(0, joystick_1.default)({
    mapping,
    onEvent: eventSoundPlayer_1.playEventSound,
    onReady: () => {
        console.log("Waiting for input...");
    },
});
//# sourceMappingURL=index.js.map