import { useLocale } from 'dumi';

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

/**
 * @description isEmpty array or object
 * @param {unknown} value check value
 * @returns {boolean}
 */
export function isEmpty(value: unknown): boolean {
  return !(Array.isArray(value)
    ? value.length
    : isObject(value)
    ? Object.entries(value).length
    : value);
}

export type Local = ReturnType<typeof useLocale>;

/**
 * @description get value by current local
 * @param {Local} locales
 * @param {T} localMap
 * @param {keyof T} key
 * @returns {R}
 */
export function getLocalValue<T = Record<string, any>, R = string | undefined>(
  locales: Local,
  localMap: T,
  key: keyof T
): R {
  const { id } = locales;
  const defaultValue = localMap[key] as R;
  // use id + base & key for check value
  if ('base' in locales && !locales.base.includes(id)) {
    return defaultValue;
  }
  const realKey = `${key as string}.${id}`;
  return (localMap[realKey as keyof T] as R) ?? defaultValue;
}
