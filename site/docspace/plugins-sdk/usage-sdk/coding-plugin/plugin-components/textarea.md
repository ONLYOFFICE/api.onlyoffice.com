# TextArea

Custom textarea.

**Interface**: ITextArea.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-textarea--docs).

![Textarea](/assets/images/docspace/textarea.png)

## Extra parameters

### className

Sets a CSS class name applied to the component. Can be used to override or extend the default component styles.

Type: string

Example: "my-textarea"

## Example

``` ts
import {Actions, type IMessage, type ITextArea} from "@onlyoffice/docspace-plugin-sdk"

const onChange = (value: string) => {
  props.value = value

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: props,
  }
  return message
}

const props: ITextArea = {
  value: "",
  onChange,
  className: "my-textarea",
}
```
