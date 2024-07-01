A container that lays out its contents in one direction. Box provides general CSS capabilities like flexbox layout, paddings, background color, border, and animation.

**Interface**: IBox.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-box--docs).

![Box](/content/img/docspace/box.png)

Extra parameters

| Name     | Description         | Type                                                                                | Example           |
| -------- | ------------------- | ----------------------------------------------------------------------------------- | ----------------- |
| children | The box components. | array of [Components](/docspace/pluginssdk/codingplugin/plugincomponents/component) | \[inputComponent] |

To set borders to the Box component, use a stroke or the [IBorderProp](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IBox.ts) interface.

Example

```
import {IBox, IInput, Components, InputGroup} from "@onlyoffice/docspace-plugin-sdk";

const nameInputProps: IInput = {
    "value": "",
    "onChange": () => {},
    "scale": true,
    "placeholder": "",
};

const inputComponent: InputGroup = {
    "component": Components.input,
    "props": nameInputProps,
};

const inputBox: IBox = {
    "marginProp": "0 0 24px",
    "children": [inputComponent],
};
```
