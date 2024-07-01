Custom checkbox input.

**Interface**: ICheckBox.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-checkbox--docs).

![Checkbox](/content/img/docspace/checkbox.png)

Example

```
import {ICheckbox, IMessage, Actions} from "@onlyoffice/docspace-plugin-sdk";

const onChange = () => {
    cbProps.isChecked = !cbProps.isChecked;

    const message: IMessage = {
        "actions": [Actions.updateProps],
        "newProps": cbProps,
    };

    return message;
};

const cbProps: ICheckbox = {
    "label": "Checkbox",
    "title": "Checkbox",
    "isChecked": false,
    onChange,
};
```
