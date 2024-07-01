A component that is used for an action on a page.

**Interface**: IButton.

See the parameters of this component in [storybook](https://storybook.onlyoffice.io/?path=/docs/components-button--docs).

![Button](/content/img/docspace/button.png)

To set the button size, use [ButtonSize](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IButton.ts) which can have the following values: *extraSmall, small, normal, medium*.

Parameters from Storybook

| Name       | Description                                                                                                                                                                  | Type       | Example        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- |
| label      | The button text.                                                                                                                                                             | string     | "Convert file" |
| size       | The button size. The normal size is equal to 36x40 px on the Desktop and Touchcreen devices. Can be: *extraSmall, small, normal, medium*. The default value is *extraSmall*. | ButtonSize | normal         |
| onClick    | Sets a function which specifies an action initiated upon clicking the button.                                                                                                | func       | () => {}       |
| primary    | Specifies if the button is primary or not. If the button is primary, it is colored blue.![Primary button](/content/img/docspace/primary-button.png)                          | boolean    | true           |
| scale      | Specifies if the button width will be scaled to 100% or not.                                                                                                                 | boolean    | true           |
| isLoading  | Specifies if the button will be displayed as a loader icon or not.![Loading button](/content/img/docspace/loading-button.png)                                                | boolean    | true           |
| isDisabled | Specifies if the button is disabled or not. The disabled button is blurred.![Disabled button](/content/img/docspace/disabled-button.png)                                     | boolean    | false          |

Extra parameters

| Name                       | Description                                                                                                                                                                                           | Type    | Example |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| withLoadingAfterClick      | Specifies whether to set the [isLoading](#isLoading) state to the button after it is clicked until the action is completed.                                                                           | boolean | true    |
| disableWhileRequestRunning | Specifies whether to set the [isDisabled](#isDisabled) state for the button when the *withLoadingAfterClick* parameter is set to **true**, and it is clicked either on the page or in the dialog box. | boolean | true    |

Example

```
import {IButton, ButtonSize} from "@onlyoffice/docspace-plugin-sdk";

const buttonProps: IButton = {
    "label": "Convert file",
    "primary": true,
    "size": ButtonSize.normal,
    "scale": true,
    "isDisabled": false,
    "withLoadingAfterClick": true,
    "onClick": () => {},
};
```
