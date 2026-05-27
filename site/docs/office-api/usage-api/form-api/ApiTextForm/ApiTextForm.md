# ApiTextForm

ApiTextForm is a subclass of [ApiFormBase](../ApiFormBase/ApiFormBase.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | Clears the current form. |
| [Copy](./Methods/Copy.md) | [ApiForm](../Enumeration/ApiForm.md) | Copies the current form (copies with the shape if it exists). |
| [Delete](./Methods/Delete.md) | boolean | Removes a form and its content. If keepContent is true, the content is not deleted. |
| [GetAllowedSymbols](./Methods/GetAllowedSymbols.md) | string | Returns the allowed symbols for the current text field. |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../../document-api/ApiColor/ApiColor.md) | Returns the background color of the current form. |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../../document-api/ApiColor/ApiColor.md) | Returns the border color of the current form. |
| [GetCharactersLimit](./Methods/GetCharactersLimit.md) | number | Returns a limit of the text field characters. |
| [GetClassType](./Methods/GetClassType.md) | "textForm" | Returns a type of the ApiTextForm class. |
| [GetFormKey](./Methods/GetFormKey.md) | string | Returns the current form key. |
| [GetFormType](./Methods/GetFormType.md) | [FormType](../Enumeration/FormType.md) | Returns a type of the current form. |
| [GetFormat](./Methods/GetFormat.md) | [TextFormFormat](../Enumeration/TextFormFormat.md) | Returns the format of the current text field. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current form. |
| [GetLock](./Methods/GetLock.md) | boolean | Returns the lock state of the current form. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current form. |
| [GetRole](./Methods/GetRole.md) | string | Returns the role of the current form. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current form. |
| [GetText](./Methods/GetText.md) | string | Returns the text from the current form. |
| [GetTextPr](./Methods/GetTextPr.md) | [ApiTextPr](../../document-api/ApiTextPr/ApiTextPr.md) | Returns the text properties from the current form. |
| [GetTipText](./Methods/GetTipText.md) | string | Returns the tip text of the current form. |
| [GetValue](./Methods/GetValue.md) | string | Returns the current text value of the text form. |
| [GetWrapperShape](./Methods/GetWrapperShape.md) | [ApiShape](../../document-api/ApiShape/ApiShape.md) | Returns a shape in which the form is placed to control the position and size of the fixed size form frame. |
| [IsAutoFit](./Methods/IsAutoFit.md) | boolean | Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form. |
| [IsComb](./Methods/IsComb.md) | boolean | Checks if the text field is a comb of characters with the same cell width. |
| [IsFilled](./Methods/IsFilled.md) | boolean | Checks if the current form is filled. |
| [IsFixed](./Methods/IsFixed.md) | boolean | Checks if the current form is fixed size. |
| [IsMultiline](./Methods/IsMultiline.md) | boolean | Checks if the current text field is multiline. |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if the current form is required. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | Places a cursor before/after the current form. |
| [SetAllowedSymbols](./Methods/SetAllowedSymbols.md) | boolean | Sets the allowed symbols for the current text field. Only the specified characters will be accepted as input. |
| [SetAutoFit](./Methods/SetAutoFit.md) | boolean | Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to the current form. |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | Sets the border color to the current form. |
| [SetCellWidth](./Methods/SetCellWidth.md) | boolean | Sets the cell width to the applied comb of characters. |
| [SetCharactersLimit](./Methods/SetCharactersLimit.md) | boolean | Sets a limit to the text field characters. |
| [SetComb](./Methods/SetComb.md) | boolean | Specifies if the text field should be a comb of characters with the same cell width. |
| [SetFormKey](./Methods/SetFormKey.md) | boolean | Sets a key to the current form. |
| [SetFormat](./Methods/SetFormat.md) | boolean | Sets the format for the current text field. |
| [SetLock](./Methods/SetLock.md) | boolean | Sets the lock state of the current form. |
| [SetMultiline](./Methods/SetMultiline.md) | boolean | Specifies if the current text field should be miltiline. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current form. |
| [SetRequired](./Methods/SetRequired.md) | boolean | Specifies if the current form should be required. |
| [SetRole](./Methods/SetRole.md) | boolean | Sets the role to the current form. |
| [SetTag](./Methods/SetTag.md) | boolean | Sets the tag attribute to the current form. |
| [SetText](./Methods/SetText.md) | boolean | Sets the text to the current text field. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current form. |
| [SetTipText](./Methods/SetTipText.md) | boolean | Sets the tip text to the current form. |
| [SetValue](./Methods/SetValue.md) | boolean | Sets the text value of the text form. |
| [ToFixed](./Methods/ToFixed.md) | boolean | Converts the current form to a fixed size form. |
| [ToInline](./Methods/ToInline.md) | boolean | Converts the current form to an inline form. |
