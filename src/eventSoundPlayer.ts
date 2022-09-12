import sfx from "sfx";
import { JoystickEvent } from "./joystick";

export const playEventSound = (event: JoystickEvent, log: boolean = true) => {
  if (log) {
    console.log("Playing sound for", event.trigger);
  }

  if (event.mapping.soundEffect) {
    sfx.play(event.mapping.soundEffect);
  } else if (event.mapping.say) {
    sfx.say(event.mapping.say);
  }
};
