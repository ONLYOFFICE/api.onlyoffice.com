# Box

A container that lays out its contents in one direction. Box provides general CSS capabilities like flexbox layout, paddings, background color, border, and animation.

**Interface**: IBox.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-box--docs).

![Box](/assets/images/docspace/box.png)

## Extra parameters

### children

The box components.

Type: [Components](./component.md)[]

Example: \[inputComponent]

To set borders to the Box component, use a stroke or the [IBorderProp](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IBox.ts) interface.

### className

Sets a CSS class name applied to the component. Can be used to override or extend the default component styles.

Type: string

Example: "my-box"

### id

Sets a unique HTML `id` attribute of the component. Can be used for CSS styling or to reference the component from other elements.

Type: string

Example: "main-box"

## Example

``` ts
import {Components, type IBox, type IInput, type InputGroup} from "@onlyoffice/docspace-plugin-sdk"

const nameInputProps: IInput = {
  value: "",
  onChange: () => {},
  scale: true,
  placeholder: "",
}

const inputComponent: InputGroup = {
  component: Components.input,
  props: nameInputProps,
}

const inputBox: IBox = {
  marginProp: "0 0 24px",
  className: "my-box",
  id: "main-box",
  children: [inputComponent],
}
```
