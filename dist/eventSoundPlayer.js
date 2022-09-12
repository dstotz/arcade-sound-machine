"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playEventSound = void 0;
const sfx_1 = __importDefault(require("sfx"));
const playEventSound = (event, log = true) => {
    if (log) {
        console.log("Playing sound for", event.trigger);
    }
    if (event.mapping.soundEffect) {
        sfx_1.default.play(event.mapping.soundEffect);
    }
    else if (event.mapping.say) {
        sfx_1.default.say(event.mapping.say);
    }
};
exports.playEventSound = playEventSound;
//# sourceMappingURL=eventSoundPlayer.js.map