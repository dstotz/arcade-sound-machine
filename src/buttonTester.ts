import path from "path";
import yaml from "js-yaml";
import { readFileSync } from "fs";
import joystick, { JoystickEvent, Mapping } from "./joystick";

const [_0, _1, pathOrNameArg, debugArg] = process.argv;
let mapping: Mapping;
let debug = debugArg ? true : false;

if (!pathOrNameArg) throw new Error("No device name or path provided");

try {
  const mappingYamlPath = path.resolve(pathOrNameArg);
  mapping = yaml.load(readFileSync(mappingYamlPath, "utf8")) as Mapping;
} catch {
  mapping = { device: { name: pathOrNameArg } };
}

const showButtonInfo = (event: JoystickEvent) => {
  console.log(event);
};

joystick({
  mapping,
  onEvent: showButtonInfo,
  onReady: () => {
    console.log("Waiting for input...");
  },
  debug,
});
