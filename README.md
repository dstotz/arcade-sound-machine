# Arcade Sound Machine

This is a fun little project to make a soundbox that is activated using a USB arcade joystick or other input simple input device.

You can start the application by running `yarn start /path/to/config.yml` or to run without building, you can run `yarn dev /path/to/config`

## Config

To choose which buttons will make which sound, you need to build a config that will get passed to the application when it starts. You will first need to figure out which device to use, and what your buttons specific mappings are so you can build your config.

See `examples/joystick_sound_effects.yml` for an example file.

The config file is a YAML file with the following format

```yaml
device:
  name: Your input device name as displayed when finding your device

buttonMapping:
  button1:
    bufferIndex: 5
    bufferValue: 19
    soundEffect: "my_sounds_folder/cool_sound.wav"
  otherButton:
    bufferIndex: 6
    bufferValue: 4
    soundEffect: "my_sounds_folder/other_neat_sound.wav"
```

You can optionally pass `nameRegex` instead of Name to specify a regex for matching your device name

```yaml
device:
  nameRegex: /joystick/i
```

### Finding your device

Running `yarn show-devices` will list each device connected to your computer. You will then pass the value in the `product` key as the device `name` in your YAML config

### Figuring out button mappings

Once you have your device, you can run `yarn test-buttons /path/to/config.yml` if you have a config or `yarn test-buttons joystick` where joystick is part of the name of your device.

This will output the bufferIndex and bufferValue each time you press a button or move the joystick. You can then use these indexes and values in your config file to correspond to a button or direction and map a sound to it.

### Sounds

For each button mapping you can specify a `soundEffect` with a path to the sound effect you want to use in a `.mp3`, `.wav`, `.m4a`, or `.aiff` format. Alternatively you can specify `say` with a string value and a voice synthesizer will speak the string when this button is pressed.
