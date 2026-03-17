declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[], vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: object): void;
  }
}
