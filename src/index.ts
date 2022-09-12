import path from "path";
import yaml from "js-yaml";
import { playEventSound } from "./eventSoundPlayer";
import joystick, { Mapping } from "./joystick";
import { readFileSync } from "fs";

const mappingYamlPathArg = process.argv[2];
if (!mappingYamlPathArg) throw new Error("No mapping file provided");

const mappingYamlPath = path.resolve(mappingYamlPathArg);
const mapping = yaml.load(readFileSync(mappingYamlPath, "utf8")) as Mapping;

joystick({
  mapping,
  onEvent: playEventSound,
  onReady: () => {
    console.log("Waiting for input...");
  },
});
