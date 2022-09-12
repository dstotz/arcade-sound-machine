"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_hid_1 = require("node-hid");
const bufferParser_1 = __importDefault(require("./bufferParser"));
const findDevice_1 = require("./findDevice");
const joystick = (options) => {
    const { mapping, onEvent, onReady, debug } = options;
    const { vendorId, productId } = (0, findDevice_1.joystickDeviceDetails)(mapping.device);
    const device = new node_hid_1.HID(vendorId, productId);
    let lastEvent;
    device.on("data", (buffer) => {
        const event = (0, bufferParser_1.default)(buffer, mapping === null || mapping === void 0 ? void 0 : mapping.buttonMapping);
        if (debug) {
            console.log({ bufferArray: [...buffer], event });
        }
        // Ignore duplicate events such as holding a button down
        if (event && JSON.stringify(event) !== lastEvent) {
            if (onEvent) {
                onEvent(event);
            }
        }
        lastEvent = JSON.stringify(event);
    });
    if (onReady) {
        onReady();
    }
};
exports.default = joystick;
//# sourceMappingURL=index.js.map