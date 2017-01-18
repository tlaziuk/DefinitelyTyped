// Type definitions for magnet-uri 5.1
// Project: https://github.com/feross/magnet-uri
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare const MagnetUri: MagnetUri.MagnetUri;

declare namespace MagnetUri {
    export interface MagnetUri {
        (uri: string): Instance;
        encode(uri: string): Instance;
        decode(parsed: Instance): string;
    }

    export interface Instance extends Object {
        dn?: string | string[];
        tr?: string | string[];
        xs?: string | string[];
        as?: string | string[];
        ws?: string | string[];
        kt?: string[];
        ix?: number | number[];
        xt?: string | string[];
        infoHash?: string;
        infoHashBuffer?: Buffer;
        name?: string | string[];
        keywords?: string | string[];
        announce?: string[];
        urlList?: string[];
    }
}

export = MagnetUri;
