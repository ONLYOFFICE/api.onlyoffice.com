import {type Args, type StoryObj} from "@storybook/preact"

export type ControlsOf<S extends StoryObj> =
  Required<Exclude<S["args"], undefined>>

export function deepControls<A extends Args>(): DeepControls<A> {
  return new DeepControls()
}

export class DeepControls<A extends Args> {
  #s: StoryObj = {}

  append<C extends StoryObj>(k: string, c: C): DeepControls<A> {
    if (c.argTypes) {
      let a = this.#s.argTypes
      if (!a) {
        a = {}
        this.#s.argTypes = a
      }
      for (const [n, v] of Object.entries(c.argTypes)) {
        a[`${k}.${n}`] = v
      }
    }

    if (c.args) {
      let a = this.#s.args
      if (!a) {
        a = {}
        this.#s.args = a
      }
      a[k] = c.args
    }

    return this
  }

  to(p: StoryObj<A>): StoryObj<A> {
    if (!p.parameters) {
      p.parameters = {}
    }

    if (!p.parameters.deepControls) {
      p.parameters.deepControls = {}
    }

    if (!p.parameters.deepControls.enabled) {
      p.parameters.deepControls.enabled = true
    }

    if (this.#s.argTypes) {
      if (!p.argTypes) {
        p.argTypes = {}
      }
      p.argTypes = {...p.argTypes, ...this.#s.argTypes}
    }

    if (this.#s.args) {
      if (!p.args) {
        p.args = {}
      }
      p.args = {...p.args, ...this.#s.args}
    }

    return p
  }
}
