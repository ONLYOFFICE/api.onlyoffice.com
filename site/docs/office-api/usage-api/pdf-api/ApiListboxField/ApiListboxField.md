# ApiListboxField

ApiListboxField is a subclass of [ApiBaseListField](../ApiBaseListField/ApiBaseListField.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddOption](./Methods/AddOption.md) | boolean | Adds new option to list options. |
| [AddWidget](./Methods/AddWidget.md) | [ApiWidget](../Enumeration/ApiWidget.md) | Adds new widget - visual representation for field |
| [Delete](./Methods/Delete.md) | boolean | Removes field from document. |
| [GetAllWidgets](./Methods/GetAllWidgets.md) | [ApiWidget](../Enumeration/ApiWidget.md)[] | Gets array with widgets of the current field. |
| [GetClassType](./Methods/GetClassType.md) | "listboxField" | Returns a type of the ApiListboxField class. |
| [GetFullName](./Methods/GetFullName.md) | string | Gets field full name. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current field. |
| [GetOption](./Methods/GetOption.md) | [ListOption](../Enumeration/ListOption.md) | Gets option from list options. |
| [GetOptions](./Methods/GetOptions.md) | [ListOption](../Enumeration/ListOption.md)[] | Gets all options from list options. |
| [GetPartialName](./Methods/GetPartialName.md) | string | Gets field partial name. |
| [GetTooltip](./Methods/GetTooltip.md) | boolean | Gets field tooltip |
| [GetValue](./Methods/GetValue.md) | string | Gets field value |
| [GetValueIndexes](./Methods/GetValueIndexes.md) | number[] | Gets selected value indexes. |
| [IsCommitOnSelChange](./Methods/IsCommitOnSelChange.md) | boolean | Checks if field can commit on selection change. |
| [IsMultipleSelection](./Methods/IsMultipleSelection.md) | boolean | Checks if the field supports multiple selection. |
| [IsReadOnly](./Methods/IsReadOnly.md) | boolean | Checks if field is read only |
| [IsRequired](./Methods/IsRequired.md) | boolean | Checks if field is required |
| [MoveOption](./Methods/MoveOption.md) | boolean | Moves option to specified position in list options. |
| [RemoveOption](./Methods/RemoveOption.md) | boolean | Removes option from list options. |
| [SetCommitOnSelChange](./Methods/SetCommitOnSelChange.md) | boolean | Sets whether the field commits changes immediately after selection changes. |
| [SetFullName](./Methods/SetFullName.md) | boolean | Sets new field name if possible. |
| [SetMultipleSelection](./Methods/SetMultipleSelection.md) | boolean | Sets whether multiple values can be selected. |
| [SetPartialName](./Methods/SetPartialName.md) | boolean | Sets new field partial name. |
| [SetReadOnly](./Methods/SetReadOnly.md) | boolean | Sets field read only |
| [SetRequired](./Methods/SetRequired.md) | boolean | Sets field required |
| [SetTooltip](./Methods/SetTooltip.md) | boolean | Sets field tooltip |
| [SetValue](./Methods/SetValue.md) | boolean | Sets field value |
| [SetValueIndexes](./Methods/SetValueIndexes.md) | boolean | Sets selected value indexes. |
