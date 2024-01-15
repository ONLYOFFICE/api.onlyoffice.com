import {useSlots} from "@onlyoffice/preact-slots"
import {ChevronRightIcon} from "@onlyoffice/ui-icons/poor/12.tsx"
import { clsx } from "clsx"
import type { JSX } from "preact"
import { h } from "preact"
import { Clone } from "../clone/clone.ts"

declare global {
  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "o-chapter-nav": any
      }
    }
  }
}

export interface RootProperties {
  children: any
}

export function Root(
  {
    children
  }: RootProperties
): JSX.Element {
  return (
    <o-chapter-nav class="tree">
      <ul class="tree__limb tree__limb_bole">
        {children}
      </ul>
    </o-chapter-nav>
  )
}

export interface GroupProperties {
  children: any
}

export function Group(
  {
    children
  }: GroupProperties
): JSX.Element {
  const [slots, outer] = useSlots(children, {
    link: Link
  })
  return (
    <li class="tree__branch tree__branch_bole">
      <div class="tree__twig">
        <Clone class="tree__leaf_bole">
          {slots.link}
        </Clone>
      </div>
      <ul class="tree__limb">
        {outer}
      </ul>
    </li>
  )
}

export interface ItemProperties {
  expanded?: boolean
  children: any
}

export function Item(
  {
    expanded,
    children
  }: ItemProperties
): JSX.Element {
  const [slots, outer] = useSlots(children, {
    link: Link
  })

  if (outer.length === 0) {
    return (
      <li class="tree__branch">
        <div class="tree__twig">
          {slots.link}
        </div>
      </li>
    )
  }

  return (
    <li class="tree__branch">
      <div class={clsx("tree__twig", !expanded && "tree__twig_closed")}>
        <button class="tree__fruit" type="button"><ChevronRightIcon /></button>{slots.link}
      </div>
      <ul class="tree__limb">
        {outer}
      </ul>
    </li>
  )
}

export interface LinkProperties {
  active?: boolean
  children: any
  class?: string
  href?: string
}

export function Link(
  {
    active,
    children,
    class: className,
    href
  }: LinkProperties
): JSX.Element {
  return (
    <a class={clsx(className, "tree__leaf", active && "tree__leaf_current")} href={href}>{children}</a>
  )
}
