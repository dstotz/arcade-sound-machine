import { devices } from "node-hid";

export const joystickDeviceDetails = devices().find(
  (device) =>
    device.product?.trim() === "Generic   USB  Joystick" ||
    (device.vendorId === 121 && device.product?.includes("Joystick"))
);

if (joystickDeviceDetails) {
  console.log("Found joystick device", joystickDeviceDetails.product);
} else {
  throw new Error("No joystick found");
}
