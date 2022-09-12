"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joystickDeviceDetails = void 0;
const node_hid_1 = require("node-hid");
const joystickDeviceDetails = (target) => {
    if (target.name && !target.nameRegex) {
        target.nameRegex = new RegExp(target.name, "i");
    }
    const device = (0, node_hid_1.devices)().find((device) => { var _a; return (_a = device.product) === null || _a === void 0 ? void 0 : _a.match(target.nameRegex); });
    if (device) {
        console.log("Device found", device);
        return device;
    }
    else {
        throw new Error("No matching device found");
    }
};
exports.joystickDeviceDetails = joystickDeviceDetails;
//# sourceMappingURL=findDevice.js.map