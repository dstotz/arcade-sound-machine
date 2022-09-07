"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joystickDeviceDetails = void 0;
const node_hid_1 = require("node-hid");
exports.joystickDeviceDetails = (0, node_hid_1.devices)().find((device) => {
    var _a, _b;
    return ((_a = device.product) === null || _a === void 0 ? void 0 : _a.trim()) === "Generic   USB  Joystick" ||
        (device.vendorId === 121 && ((_b = device.product) === null || _b === void 0 ? void 0 : _b.includes("Joystick")));
});
if (exports.joystickDeviceDetails) {
    console.log("Found joystick device", exports.joystickDeviceDetails.product);
}
else {
    throw new Error("No joystick found");
}
//# sourceMappingURL=findDevice.js.map