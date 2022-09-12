import { HID } from "node-hid";
import parseBuffer from "./bufferParser";
import { joystickDeviceDetails } from "./findDevice";

export interface DeviceDetails {
  name?: string;
  nameRegex?: RegExp;
}

export interface ButtonMapping {
  [key: string]: {
    bufferIndex: number;
    bufferValue?: number;
    soundEffect?: string;
    say?: string;
  };
}

export interface Mapping {
  device: DeviceDetails;
  buttonMapping?: ButtonMapping;
}

export interface JoystickEvent {
  trigger: string;
  mapping: ButtonMapping[string];
}

export interface JoystickOptions {
  mapping: Mapping;
  onReady?: () => void;
  onEvent?: (event: JoystickEvent) => void;
  debug?: boolean;
}

const joystick = (options: JoystickOptions) => {
  const { mapping, onEvent, onReady, debug } = options;
  const { vendorId, productId } = joystickDeviceDetails(mapping!.device);
  const device = new HID(vendorId, productId);
  let lastEvent: string;

  device.on("data", (buffer) => {
    const event = parseBuffer(buffer, mapping?.buttonMapping);
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

export default joystick;
