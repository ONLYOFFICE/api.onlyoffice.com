import type { JSX, VNode } from "preact"
import { Fragment, cloneElement, h } from "preact"

export function Clone<T extends (...a: any) => VNode<any>>(
  {
    children,
    ...properties
  }: Omit<Parameters<T>[0], "children"> & {
    children: T,
  }
): JSX.Element {
  const c = cloneElement(children, properties)
  return <>{c}</>
}
