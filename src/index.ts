import joystick, { ButtonMapping, JoystickEvent } from "./joystick";
import sfx from "sfx";

const buttonMapping: ButtonMapping = {
  up: {
    bufferIndex: 1,
    val: 0,
    soundEffect: "assets/sounds/up.wav",
  },
  down: {
    bufferIndex: 1,
    val: 255,
    soundEffect: "assets/sounds/down.wav",
  },
  left: {
    bufferIndex: 0,
    val: 0,
    soundEffect: "assets/sounds/left.wav",
  },
  right: {
    bufferIndex: 0,
    val: 255,
    soundEffect: "assets/sounds/right.wav",
  },
  button1: {
    bufferIndex: 5,
    val: 47,
    soundEffect: "assets/sounds/button1.wav",
  },
  button2: {
    bufferIndex: 5,
    val: 31,
    soundEffect: "assets/sounds/button2.wav",
  },
  button3: {
    bufferIndex: 5,
    val: 143,
    soundEffect: "assets/sounds/button3.wav",
  },
  button4: {
    bufferIndex: 5,
    val: 79,
    soundEffect: "assets/sounds/button4.wav",
  },
  button5: {
    bufferIndex: 6,
    val: 2,
    soundEffect: "assets/sounds/button5.wav",
  },
  button6: {
    bufferIndex: 6,
    val: 1,
    soundEffect: "assets/sounds/button6.wav",
  },
  button7: {
    bufferIndex: 6,
    val: 8,
    soundEffect: "assets/sounds/button7.wav",
  },
  button8: {
    bufferIndex: 6,
    val: 4,
    soundEffect: "assets/sounds/button8.wav",
  },
  button9: {
    bufferIndex: 6,
    val: 32,
    soundEffect: "assets/sounds/button9.wav",
  },
  button10: {
    bufferIndex: 6,
    val: 16,
    soundEffect: "assets/sounds/button10.wav",
  },
};

const makeSound = (event: JoystickEvent) => {
  console.log("Playing sound for", event.trigger);

  if (event.mapping.soundEffect) {
    sfx.play(event.mapping.soundEffect);
  } else if (event.mapping.say) {
    sfx.say(event.mapping.say);
  }
};

joystick({ buttonMapping, onEvent: makeSound });
