# ApiCheckBoxForm

Represents the ApiCheckBoxForm class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | Clears the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
| [Delete](./Methods/Delete.md) | boolean | Removes a form and its content. If keepContent is true, the content is not deleted. |
| [GetChoiceName](./Methods/GetChoiceName.md) | string | Returns the choice name of the current radio button. |
| [GetClassType](./Methods/GetClassType.md) | "checkBoxForm" | Returns a type of the ApiCheckBoxForm class. |
| [GetFormKey](./Methods/GetFormKey.md) | string | Returns the current form key. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current form. |
| [GetLabel](./Methods/GetLabel.md) | string | Returns the label of the current check box. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current form. |
| [GetRadioGroup](./Methods/GetRadioGroup.md) | string | Returns the radio group key if the current checkbox is a radio button. |
| [GetRole](./Methods/GetRole.md) | string | Returns the role of the current form. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current form. |
| [GetText](./Methods/GetText.md) | string | Returns the text from the current form. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../text-document-api/ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form. *Used if possible for this type of form* |
| [GetTipText](./Methods/GetTipText.md) | string | Returns the tip text of the current form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../text-document-api/ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame. The null value will be returned for the inline forms. |
| [IsChecked](./Methods/IsChecked.md) | boolean | Returns the state of the current checkbox (checked or not). |
| [IsFixed](./Methods/IsFixed.md) | boolean | Checks if the current form is fixed size. |
| [IsRadioButton](./Methods/IsRadioButton.md) | boolean | Checks if the current checkbox is a radio button. |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if the current form is required. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | Places a cursor before/after the current form. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current form. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current form. |
| [SetChecked](./Methods/SetChecked.md) | boolean | Checks the current checkbox. |
| [SetChoiceName](./Methods/SetChoiceName.md) | boolean | Sets the choice name for the current radio button. |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | Sets a key to the current form. |
| [SetLabel](./Methods/SetLabel.md) | boolean | Sets the label for the current check box. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form. *Can't be set to checkbox or radio button.* |
| [SetRadioGroup](./Methods/SetRadioGroup.md) | boolean | Sets the radio group key to the current radio button. |
| [SetRequired](./Methods/SetRequired.md) | boolean | Specifies if the current form should be required. |
| [SetRole](./Methods/SetRole.md) | boolean | Sets the role to the current form. |
| [SetTag](./Methods/SetTag.md) | boolean | Sets the tag attribute to the current form. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form. *Used if possible for this type of form* |
| [SetTipText](./Methods/SetTipText.md) | boolean | Sets the tip text to the current form. |
| [ToFixed](./Methods/ToFixed.md) | boolean | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | boolean | Converts the current form to an inline form. *Picture form can't be converted to an inline form, it's always a fixed size object.* |
