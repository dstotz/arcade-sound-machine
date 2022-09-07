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

  // const [
  //   xAxis,
  //   yAxis,
  //   _ignore,
  //   _ignore2,
  //   _ignore3,
  //   buttonGroup1,
  //   buttonGroup2,
  //   _ignore4,
  // ] = buffer;

  // if (xAxis === 0 || xAxis === 255) {
  //   event.type = "axis";
  //   event.axis = xAxis === 0 ? "x-" : "x+";
  // }

  // if (yAxis === 0 || yAxis === 255) {
  //   event.type = "axis";
  //   event.axis = yAxis === 0 ? "y+" : "y-";
  // }

  // const button = buttonMapping[buttonGroup1] || buttonMapping[buttonGroup2];
  // if (button) {
  //   event.type = "button";
  //   event.button = button;
  // }

  // return event;
};

export default parseBuffer;
