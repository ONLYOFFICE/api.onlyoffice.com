Plain text.

**Interface**: IText.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-text--docs).

![Text](/content/img/docspace/text.png)

Extra parameters

| Name | Description                           | Type   | Example                     |
| ---- | ------------------------------------- | ------ | --------------------------- |
| text | The text inserted into the component. | string | "Sample for text component" |

Example

```
import {IText} from "@onlyoffice/docspace-plugin-sdk";

const text: IText = {
    "text": "Sample for text component",
    "fontWeight": 600,
    "fontSize": "13px",
    "lineHeight": "20px",
    "noSelect": true,
};
```
