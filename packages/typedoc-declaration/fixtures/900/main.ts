/**
 * before
 *
 * <table></table>
 *
 * ```ts
 * code
 * ```
 *
 * after
 *
 * @summary summary
 *
 * @example
 * // If there are no code blocks, TypeDoc assumes the whole tag
 * // should be a code block. This is not valid TSDoc, but is recognized
 * // by VSCode and enables better JSDoc support.
 * factorial(1)
 *
 * @example
 * If there is a code block, then both TypeDoc and VSCode will treat
 * text outside of the code block as regular text.
 * ```ts
 * factorial(1)
 * ```
 */
export type T<G> = Promise<string>
