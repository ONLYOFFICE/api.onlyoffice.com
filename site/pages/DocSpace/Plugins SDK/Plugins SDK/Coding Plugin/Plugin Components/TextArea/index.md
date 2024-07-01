Custom textarea.

**Interface**: ITextArea.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-textarea--docs).

![Textarea](/content/img/docspace/textarea.png)

Example

```
import {ITextArea, IMessage, Actions} from "@onlyoffice/docspace-plugin-sdk";

const onChange = (value: string) => {
    props.value = value;

    const message: IMessage = {
        "actions": [Actions.updateProps],
        "newProps": props,
    };

    return message;
};

const props: ITextArea = {
    "value": "",
    onChange,
};
```
