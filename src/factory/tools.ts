/**
 * @description whether value is typeof object
 * @param {unknown} value check value
 * @returns {value is object}
 */
export function isObject(value: unknown): value is object {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * @description whether is apple device
 */
export const isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(
  typeof navigator !== 'undefined' ? navigator?.platform : ''
);

/**
 * @description whether value is typeof undefined
 * @param {unknown} value check value
 * @returns {value is undefined}
 */
export function isUndefined(value: unknown): value is undefined {
  return Object.prototype.toString.call(value) === '[object Undefined]';
}

/**
 * @description whether link is out link
 * @param {string} link check link string
 * @returns {boolean}
 */
export function isOutLink(link: string): boolean {
  return /^(\w+:)\/\/|^(mailto|tel):/.test(link);
}

export function isEmpty(value: unknown): boolean {
  return !(Array.isArray(value)
    ? value.length
    : isObject(value)
    ? Object.entries(value).length
    : value);
}
