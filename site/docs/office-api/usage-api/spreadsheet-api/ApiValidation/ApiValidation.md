# ApiValidation

Represents the ApiValidation class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AlertStyle | [ValidationAlertStyle](../Enumeration/ValidationAlertStyle.md) | Returns or sets the validation alert style. |
| ErrorMessage | string | Returns or sets the data validation error message. |
| ErrorTitle | string | Returns or sets the title of the data-validation error dialog box. |
| Formula1 | string | Returns or sets the value or expression associated with the conditional format or data validation. |
| Formula2 | string | Returns or sets the value or expression associated with the second part of a conditional format or data validation. |
| IgnoreBlank | boolean | Returns or sets a Boolean value that specifies whether blank values are permitted by the range data validation. |
| InCellDropdown | boolean | Returns or sets a Boolean value indicating whether data validation displays a drop-down list that contains acceptable values. |
| InputMessage | string | Returns or sets the data validation input message. |
| InputTitle | string | Returns or sets the title of the data-validation input dialog box. |
| Operator | [ValidationOperator](../Enumeration/ValidationOperator.md) | Returns or sets the data validation operator. |
| Parent | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object. |
| ShowError | boolean | Returns or sets a Boolean value indicating whether the data validation error message will be displayed whenever the user enters invalid data. |
| ShowInput | boolean | Returns or sets a Boolean value indicating whether the data validation input message will be displayed whenever the user selects a cell in the data validation range. |
| Type | [ValidationType](../Enumeration/ValidationType.md) | Returns or sets the validation type. |
| Value | string | Returns or sets the validation value. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiValidation](../ApiValidation/ApiValidation.md) \| null | Adds data validation to the specified range. |
| [Delete](./Methods/Delete.md) | None | Deletes the object. |
| [GetAlertStyle](./Methods/GetAlertStyle.md) | [ValidationAlertStyle](../Enumeration/ValidationAlertStyle.md) | Returns the validation alert style. |
| [GetErrorMessage](./Methods/GetErrorMessage.md) | string | Returns the data validation error message. |
| [GetErrorTitle](./Methods/GetErrorTitle.md) | string | Returns the title of the data-validation error dialog box. |
| [GetFormula1](./Methods/GetFormula1.md) | string | Returns the first formula in the data validation. |
| [GetFormula2](./Methods/GetFormula2.md) | string | Returns the second formula in the data validation. |
| [GetIgnoreBlank](./Methods/GetIgnoreBlank.md) | boolean | Returns whether blank values are permitted by the range data validation. |
| [GetInCellDropdown](./Methods/GetInCellDropdown.md) | boolean | Returns whether data validation displays a drop-down list that contains acceptable values. |
| [GetInputMessage](./Methods/GetInputMessage.md) | string | Returns the data validation input message. |
| [GetInputTitle](./Methods/GetInputTitle.md) | string | Returns the title of the data-validation input dialog box. |
| [GetOperator](./Methods/GetOperator.md) | [ValidationOperator](../Enumeration/ValidationOperator.md) | Returns the data validation operator. |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object. |
| [GetShowError](./Methods/GetShowError.md) | boolean | Returns whether the data validation error message will be displayed. |
| [GetShowInput](./Methods/GetShowInput.md) | boolean | Returns whether the data validation input message will be displayed. |
| [GetType](./Methods/GetType.md) | [ValidationType](../Enumeration/ValidationType.md) | Returns the validation type. |
| [Modify](./Methods/Modify.md) | [ApiValidation](../ApiValidation/ApiValidation.md) \| null | Modifies data validation for a range. |
| [SetErrorMessage](./Methods/SetErrorMessage.md) | None | Sets the data validation error message. |
| [SetErrorTitle](./Methods/SetErrorTitle.md) | None | Sets the title of the data-validation error dialog box. |
| [SetIgnoreBlank](./Methods/SetIgnoreBlank.md) | None | Sets whether blank values are permitted by the range data validation. |
| [SetInCellDropdown](./Methods/SetInCellDropdown.md) | None | Sets whether data validation displays a drop-down list that contains acceptable values. |
| [SetInputMessage](./Methods/SetInputMessage.md) | None | Sets the data validation input message. |
| [SetInputTitle](./Methods/SetInputTitle.md) | None | Sets the title of the data-validation input dialog box. |
| [SetShowError](./Methods/SetShowError.md) | None | Sets whether the data validation error message will be displayed. |
| [SetShowInput](./Methods/SetShowInput.md) | None | Sets whether the data validation input message will be displayed. |
