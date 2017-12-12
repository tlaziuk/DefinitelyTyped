// Type definitions for validatex 0.3
// Project: https://github.com/ludbek/validatex
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validatex {
    type error = string;
    type validator<R extends error = error> = (data: any) => R | void;
    type validators<R extends error = error> = validator<R> | Array<validator<R>>;

    class SkipValidation<T> {
        public message: T;
        public name: string;
        constructor(message: T);
    }

    function validateSingle<D, E extends error>(data: D, validators: validators<E>, multipleErrors: true, all?: object, key?: string): E[];
    function validateSingle<D, E extends error>(data: D, validators: validators<E>, multipleErrors?: any, all?: object, key?: string): E;

    function validate<O extends object, E extends error>(data: O, validators: {[P in keyof O]?: validators<E>}, multipleErrors: true): undefined | E[][];
    function validate<O extends object, E extends error>(data: O, validators?: {[P in keyof O]?: validators<E>}, multipleErrors?: any): undefined | E[];
    function validate<D, E extends error>(data: D, validators: validators<E>, multipleErrors: true): E[];
    function validate<D, E extends error>(data: D, validators: validators<E>, multipleErrors?: any): E;

    function required(flag?: boolean): validator<string>;
    function required<E extends error>(flag: true, message: E): validator<E>;

    function isNumber(): validator<string>;
    function isNumber<E extends error>(error: E): validator<E>;

    const isString: typeof isNumber;

    const isFunction: typeof isNumber;

    const isObject: typeof isNumber;

    const isArray: typeof isNumber;

    const isEmail: typeof isNumber;

    const isBoolean: typeof isNumber;

    function length(length: number): validator<string>;
    function length<E extends error>(length: number, error: E): validator<E>;

    function equalsTo(key: keyof object): validator<string>;
    function equalsTo<E extends error>(key: keyof object, error: E): validator<E>;

    const minLength: typeof length;

    const maxLength: typeof length;

    function within(value: any | any[]): validator<string>;
    function within<E extends error>(value: any | any[], error: E): validator<E>;

    const excludes: typeof within;

    function pattern(regex: RegExp): validator<string>;
    function pattern<E extends error>(regex: RegExp, error: E): validator<E>;
}

export = validatex;
