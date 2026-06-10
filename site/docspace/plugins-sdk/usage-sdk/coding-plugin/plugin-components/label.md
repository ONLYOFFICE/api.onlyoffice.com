# Label

Field name in the form.

**Interface**: ILabel.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-label--docs).

![Label](/assets/images/docspace/label.png)

## Extra parameters

### className

Sets a CSS class name applied to the component.

Type: string

Example: "my-label"

## Example

``` ts
import {type ILabel} from "@onlyoffice/docspace-plugin-sdk"

const label: ILabel = {
  text: "Input:",
  isRequired: false,
  truncate: true,
}
```
