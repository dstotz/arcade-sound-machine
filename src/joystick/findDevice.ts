import { Device, devices } from "node-hid";
import { DeviceDetails } from ".";

export const joystickDeviceDetails = (target: DeviceDetails): Device => {
  if (target.name && !target.nameRegex) {
    target.nameRegex = new RegExp(target.name, "i");
  }

  const device = devices().find((device) =>
    device.product?.match(target.nameRegex!)
  );

  if (device) {
    console.log("Device found", device);
    return device;
  } else {
    throw new Error("No matching device found");
  }
};
