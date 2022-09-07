import { HID } from "node-hid";
import parseBuffer from "./bufferParser";
import { joystickDeviceDetails } from "./findDevice";

export interface ButtonMapping {
  [key: string]: {
    bufferIndex: number; // The index of the buffer to check
    val?: number;
    soundEffect?: string; // path to sound effect
    say?: string; // text to say
  };
}

export interface JoystickEvent {
  trigger: string;
  mapping: ButtonMapping[string];
}

export interface JoystickOptions {
  buttonMapping: ButtonMapping;
  onEvent?: (event: JoystickEvent) => void;
}

const joystick = (options: JoystickOptions) => {
  const { buttonMapping, onEvent } = options;
  const { vendorId, productId } = joystickDeviceDetails!;
  const device = new HID(vendorId, productId);
  let lastEvent: string;

  device.on("data", (buffer) => {
    const event = parseBuffer(buffer, buttonMapping);

    // Ignore duplicate events such as holding a button down
    if (event && JSON.stringify(event) !== lastEvent) {
      if (onEvent) {
        onEvent(event);
      }
    }

    lastEvent = JSON.stringify(event);
  });
};

export default joystick;
