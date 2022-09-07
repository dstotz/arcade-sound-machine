import { ButtonMapping, JoystickEvent } from ".";

const parseBuffer = (
  buffer: Buffer,
  buttonMapping: ButtonMapping
): JoystickEvent | undefined => {
  for (const trigger in buttonMapping) {
    const { bufferIndex, val } = buttonMapping[trigger];
    if (buffer[bufferIndex] === val) {
      return {
        trigger,
        mapping: buttonMapping[trigger],
      };
    }
  }
};

export default parseBuffer;
