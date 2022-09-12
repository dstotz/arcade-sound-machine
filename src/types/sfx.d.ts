declare module "sfx" {
  export function say(
    text: string,
    voice?: string,
    callback?: () => void
  ): void;

  export function play(
    path: string,
    volume?: number,
    rate?: number,
    callback?: () => void
  ): void;
}

export default sfx;
