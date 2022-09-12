import { ButtonMapping, JoystickEvent } from ".";

const defaultIdleBufferState = [127, 127, null, 127, 127, 15, 0, 192];

const parseBuffer = (
  buffer: Buffer,
  buttonMapping?: ButtonMapping
): JoystickEvent | undefined => {
  if (buttonMapping) {
    for (const trigger in buttonMapping) {
      const { bufferIndex, bufferValue } = buttonMapping[trigger];
      if (buffer[bufferIndex] === bufferValue) {
        return {
          trigger,
          mapping: buttonMapping[trigger],
        };
      }
    }
  }

  // Runs if no button mapping is provided or no match is found
  const { bufferIndex, bufferValue } = bufferDiff(buffer);
  if (typeof bufferIndex === "number" && typeof bufferValue === "number") {
    return {
      trigger: "unmapped",
      mapping: {
        bufferIndex,
        bufferValue,
      },
    };
  }
};

const bufferDiff = (
  buffer: Buffer
): { bufferIndex?: number; bufferValue?: number } => {
  const bufferState: (number | null)[] = [...buffer];
  bufferState[2] = null; // Ignored buffer index
  let diffIndex, diffValue;
  if (JSON.stringify(defaultIdleBufferState) !== JSON.stringify(bufferState)) {
    bufferState.forEach((value, index) => {
      if (value !== defaultIdleBufferState[index]) {
        diffIndex = index;
        diffValue = value;
        return;
      }
    });
  }
  return { bufferIndex: diffIndex, bufferValue: diffValue };
};

export default parseBuffer;
