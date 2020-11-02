/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HoneySpeech {
        /**
          * i18n language ident for Web Speech API: de-DE or en or de ...
         */
        "audiolang": string;
        /**
          * pitch for Web Speech API: default: 1
         */
        "audiopitch": number;
        /**
          * rate for Web Speech API: default 1
         */
        "audiorate": number;
        /**
          * volume for Web Speech API: default 1
         */
        "audiovolume": number;
        /**
          * icon height, default: 36
          * @param iconheight
          * @default 36
         */
        "iconheight": string;
        /**
          * icon width default: 36
         */
        "iconwidth": string;
        /**
          * An comma separated list  with ids of DOM elements which inner text should be speech.
         */
        "textids": string;
        /**
          * voice name used of Web Speech API: default undefined
         */
        "voicename": string;
    }
}
declare global {
    interface HTMLHoneySpeechElement extends Components.HoneySpeech, HTMLStencilElement {
    }
    var HTMLHoneySpeechElement: {
        prototype: HTMLHoneySpeechElement;
        new (): HTMLHoneySpeechElement;
    };
    interface HTMLElementTagNameMap {
        "honey-speech": HTMLHoneySpeechElement;
    }
}
declare namespace LocalJSX {
    interface HoneySpeech {
        /**
          * i18n language ident for Web Speech API: de-DE or en or de ...
         */
        "audiolang"?: string;
        /**
          * pitch for Web Speech API: default: 1
         */
        "audiopitch"?: number;
        /**
          * rate for Web Speech API: default 1
         */
        "audiorate"?: number;
        /**
          * volume for Web Speech API: default 1
         */
        "audiovolume"?: number;
        /**
          * icon height, default: 36
          * @param iconheight
          * @default 36
         */
        "iconheight"?: string;
        /**
          * icon width default: 36
         */
        "iconwidth"?: string;
        /**
          * Fired if the stimme has failed to speak.
         */
        "onHoneySpeakerFailed"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the stimme has finished with speaking.
         */
        "onHoneySpeakerFinished"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the stimme is paused with speaking.
         */
        "onHoneySpeakerPaused"?: (event: CustomEvent<string>) => void;
        /**
          * Fired if the stimme is speaking.
         */
        "onHoneySpeakerStarted"?: (event: CustomEvent<string>) => void;
        /**
          * An comma separated list  with ids of DOM elements which inner text should be speech.
         */
        "textids": string;
        /**
          * voice name used of Web Speech API: default undefined
         */
        "voicename"?: string;
    }
    interface IntrinsicElements {
        "honey-speech": HoneySpeech;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-speech": LocalJSX.HoneySpeech & JSXBase.HTMLAttributes<HTMLHoneySpeechElement>;
        }
    }
}
