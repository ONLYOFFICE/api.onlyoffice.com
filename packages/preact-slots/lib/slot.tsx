// This file is a simplified version of the [@radix-ui/react-slot] package.
//
// [@radix-ui/react-slot]: https://github.com/radix-ui/primitives/blob/74b182b401c8ca0fa5b66a5a9a47f507bb3d5adc/packages/react/slot/src/Slot.tsx

import {
  type ComponentChild,
  type ComponentChildren,
  Fragment,
  type JSX,
  type VNode,
  cloneElement,
  h,
  isValidElement,
  toChildArray,
} from "preact"

export interface SlotProperties extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren
}

export function Slot(p: SlotProperties): JSX.Element {
  const {children, ...ob} = p
  const ca = toChildArray(children)
  const cc: ComponentChildren[] = []
  let sl: VNode | undefined
  let ne: ComponentChildren | undefined
  let ch = children

  for (const c of ca) {
    if (!sl && isSlottable(c)) {
      sl = c
      ne = sl.props.children

      const a = toChildArray(ne)
      if (a.length <= 1 && isValidElement(ne)) {
        cc.push(ne.props.children)
      }

      continue
    }

    if (c !== sl) {
      cc.push(c)
    }
  }

  if (sl && isValidElement(ne)) {
    ch = cloneElement(ne, undefined, cc)
  }

  return <SlotClone {...ob}>{ch}</SlotClone>
}

function isSlottable(c: ComponentChild): c is VNode {
  return isValidElement(c) && c.type === Slottable
}

interface SlottableProperties {
  children: ComponentChildren
}

function Slottable(p: SlottableProperties): JSX.Element {
  return <>{p.children}</>
}

interface SlotCloneProperties {
  children: preact.ComponentChildren
}

function SlotClone(p: SlotCloneProperties): VNode | null {
  const {children, ...o} = p
  if (isValidElement(children)) {
    const p = mergeProperties(o, children.props)
    return cloneElement(children, p)
  }
  return null
}

// todo: move to a separate package the following functions

type AnyProperties = Record<string, unknown>

function mergeProperties(a: AnyProperties, b: AnyProperties): AnyProperties {
  b = {...b}

  for (const n in b) {
    const x = a[n]
    const y = b[n]

    if (isHandler(n) && typeof x === "function" && typeof y === "function") {
      b[n] = (...a: unknown[]) => {
        x(...a)
        y(...a)
      }
      continue
    }

    if (isHandler(n) && typeof x === "function") {
      b[n] = x
      continue
    }

    if (n === "style" && typeof x === "object" && typeof y === "object") {
      b[n] = {...x, ...y}
      continue
    }

    if (n === "class") {
      b[n] = [x, y].filter(Boolean).join(" ")
    }
  }

  return {...a, ...b}
}

function isHandler(s: string): boolean {
  return /^on[A-Z]/.test(s)
}
