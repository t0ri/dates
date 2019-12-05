declare class Deight {
    date: any;
    constructor(...args: any);
    get year(): any;
    get month(): string;
    get monthShort(): string;
    get weekday(): string;
    get day(): any;
    get hours(): any;
    get minutes(): any;
    get seconds(): any;
    /**
     * This method creates a formatted date & time string.
     * @param {string} input any string using key letters.
     * @returns {string} formatted date & time string.
     */
    format(mask?: string): string;
    /**
     * This method creates a timestamp for how long ago the Deight was.
     * @returns {string} timestamp
     */
    when(today?: any): string;
}
