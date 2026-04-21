# ApiTextField

ApiTextField is a subclass of [ApiBaseField](../ApiBaseField/ApiBaseField.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddWidget](./Methods/AddWidget.md) | [ApiWidget](../Enumeration/ApiWidget.md) | Adds new widget - visual representation for field |
| [ClearFormat](./Methods/ClearFormat.md) | boolean | Clears format of field. |
| [Delete](./Methods/Delete.md) | boolean | Removes field from document. |
| [GetAllWidgets](./Methods/GetAllWidgets.md) | [ApiWidget](../Enumeration/ApiWidget.md)[] | Gets array with widgets of the current field. |
| [GetCharLimit](./Methods/GetCharLimit.md) | number | Gets text field chars limit. &lt;note&gt; Char limit 0 means field doesn't have char limit |
| [GetClassType](./Methods/GetClassType.md) | "textField" | Returns a type of the ApiTextField class. |
| [GetFullName](./Methods/GetFullName.md) | string | Gets field full name. |
| [GetPartialName](./Methods/GetPartialName.md) | string | Gets field partial name. |
| [GetValue](./Methods/GetValue.md) | string | Gets field value |
| [IsComb](./Methods/IsComb.md) | boolean | Checks if text field is comb. |
| [IsMultiline](./Methods/IsMultiline.md) | boolean | Checks if text field is multiline. |
| [IsReadOnly](./Methods/IsReadOnly.md) | boolean | Checks if field is read only |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if field is required |
| [IsScrollLongText](./Methods/IsScrollLongText.md) | boolean | Checks if text field can scroll long text. |
| [SetCharLimit](./Methods/SetCharLimit.md) | boolean | Sets text field chars limit. &lt;note&gt; Char limit 0 means field doesn't have char limit |
| [SetComb](./Methods/SetComb.md) | boolean | Sets text field comb prop. 💡  Should have char limit more then 0  |
| [SetDateFormat](./Methods/SetDateFormat.md) | boolean | Sets date format for field. |
| [SetFullName](./Methods/SetFullName.md) | boolean | Sets new field name if possible. |
| [SetMask](./Methods/SetMask.md) | boolean | Sets mask for entered text for field. |
| [SetMultiline](./Methods/SetMultiline.md) | boolean | Sets text field multiline prop. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | boolean | Sets number format for field. |
| [SetPartialName](./Methods/SetPartialName.md) | boolean | Sets new field partial name. |
| [SetPercentageFormat](./Methods/SetPercentageFormat.md) | boolean | Sets percentage format for field. |
| [SetReadOnly](./Methods/SetReadOnly.md) | boolean | Sets field read only |
| [SetRegularExp](./Methods/SetRegularExp.md) | boolean | Sets regular expression validate string for field. |
| [SetRequired](./Methods/SetRequired.md) | boolean | Sets field required |
| [SetScrollLongText](./Methods/SetScrollLongText.md) | boolean | Sets text field can scroll long text prop. |
| [SetSpecialFormat](./Methods/SetSpecialFormat.md) | boolean | Sets special format for field. |
| [SetTimeFormat](./Methods/SetTimeFormat.md) | boolean | Sets time format for field. |
| [SetValidateRange](./Methods/SetValidateRange.md) | boolean | Sets validate range for field. 💡  Can only be applied to fields with a percentage or number format.  |
| [SetValue](./Methods/SetValue.md) | boolean | Sets field value |
