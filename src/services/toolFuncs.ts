import { InjectionKey } from "vue";

/**
 * *handle typescript type by function
 * get a token from a function
 *
 * @export
 * @template T
 * @param {(...args: any[]) => T} func
 * @param {string} [name]
 * @returns {InjectionKey<T>}
 */
export function getFuncToken<T>(
  func: (...args: any[]) => T,
  name?: string
): InjectionKey<T> {
  if (name) {
    return name as any;
  }
  return Symbol();
}

/**
 * *handle typescript type by function
 * get a token from class
 *
 * @export
 * @template T
 * @param {{ new (...args: any[]): T }} constructor
 * @param {string} [name]
 * @returns {InjectionKey<T>}
 */
export function getClassToken<T>(
  constructor: { new (...args: any[]): T },
  name?: string
): InjectionKey<T> {
  if (name) {
    return name as any;
  }
  return Symbol();
}

/**
 * *thanks to angular/cdk
 * get the platform informations
 *
 * @export
 * @returns
 */
export function platform() {
  let v8BreakIt = false;
  try {
    v8BreakIt = typeof Intl !== "undefined" && (Intl as any).v8BreakIterator;
  } catch {
    v8BreakIt = false;
  }

  const BROWSER = typeof document === "object" && !!document;
  const EDGE = BROWSER && /(Edg)/i.test(navigator.userAgent);
  const TRIDENT = BROWSER && /(msie|trident)/i.test(navigator.userAgent);
  const BLINK =
    BROWSER &&
    !!((window as any).chrome || v8BreakIt) &&
    typeof CSS !== "undefined" &&
    !EDGE &&
    !TRIDENT;
  const WEBKIT =
    BROWSER &&
    /AppleWebKit/i.test(navigator.userAgent) &&
    !BLINK &&
    !EDGE &&
    !TRIDENT;
  const IOS =
    BROWSER &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !("MSStream" in window);
  const FIREFOX = BROWSER && /(firefox|minefield)/i.test(navigator.userAgent);
  const ANDROID = BROWSER && /android/i.test(navigator.userAgent) && !TRIDENT;
  const SAFARI = BROWSER && /safari/i.test(navigator.userAgent) && WEBKIT;
  return {
    BROWSER,
    EDGE,
    TRIDENT,
    BLINK,
    WEBKIT,
    IOS,
    FIREFOX,
    ANDROID,
    SAFARI,
  };
}
