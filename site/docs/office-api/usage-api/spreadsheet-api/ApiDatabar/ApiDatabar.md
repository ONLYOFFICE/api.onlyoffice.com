# ApiDatabar

Represents the ApiDatabar class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AxisPosition | [XlDataBarAxisPosition](../Enumeration/XlDataBarAxisPosition.md) | Returns or sets the axis position of the data bar conditional formatting rule. |
| BarFillType | [XlDataBarFillType](../Enumeration/XlDataBarFillType.md) | Returns or sets the bar fill type of the data bar. |
| Direction | [XlReadingOrder](../Enumeration/XlReadingOrder.md) | Returns or sets the direction of the data bar. |
| Formula | string | Returns the formula of the data bar. |
| MaxPoint | object | Returns the maximum value condition of the data bar. |
| MinPoint | object | Returns the minimum value condition of the data bar. |
| NegativeBarColor | [ApiColor](../ApiColor/ApiColor.md) | Returns or sets the negative bar color of the data bar. |
| NegativeBorderColor | [ApiColor](../ApiColor/ApiColor.md) | Returns or sets the negative bar border color of the data bar. |
| PercentMax | number | Returns or sets the percent maximum value of the data bar. |
| PercentMin | number | Returns or sets the percent minimum value of the data bar. |
| ShowValue | boolean | Returns or sets whether the data bar shows or hides the cell value. |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the data bar conditional formatting rule. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Deletes the current format condition. |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of cells to which the current conditional formatting rule applies. |
| [GetAxisColor](./Methods/GetAxisColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the axis color of the data bar conditional formatting rule. |
| [GetAxisPosition](./Methods/GetAxisPosition.md) | [XlDataBarAxisPosition](../Enumeration/XlDataBarAxisPosition.md) | Returns the axis position of the data bar conditional formatting rule. |
| [GetBarBorderColor](./Methods/GetBarBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the bar border color of the data bar. |
| [GetBarColor](./Methods/GetBarColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the bar color of the data bar. |
| [GetBarFillType](./Methods/GetBarFillType.md) | [XlDataBarFillType](../Enumeration/XlDataBarFillType.md) | Returns the bar fill type of the data bar. |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | Returns the date operator for time period conditions. |
| [GetDirection](./Methods/GetDirection.md) | [XlReadingOrder](../Enumeration/XlReadingOrder.md) | Returns the direction of the data bar. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns the background color for the format condition. Returns 'No Fill' when the background color of the format condition is null. |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | Returns the font applied by the current format condition. |
| [GetFormula](./Methods/GetFormula.md) | string | Returns the formula of the data bar. |
| [GetFormula1](./Methods/GetFormula1.md) | string | Returns the first formula used by the current conditional formatting rule. |
| [GetFormula2](./Methods/GetFormula2.md) | string | Returns the second formula used by the current conditional formatting rule. |
| [GetMaxPointType](./Methods/GetMaxPointType.md) | [XlConditionValueTypes](../Enumeration/XlConditionValueTypes.md) \| null | Returns the type of the maximum value condition for the data bar. |
| [GetMaxPointValue](./Methods/GetMaxPointValue.md) | string \| number \| null | Returns the value of the maximum value condition for the data bar. |
| [GetMinPointType](./Methods/GetMinPointType.md) | [XlConditionValueTypes](../Enumeration/XlConditionValueTypes.md) \| null | Returns the type of the minimum value condition for the data bar. |
| [GetMinPointValue](./Methods/GetMinPointValue.md) | string \| number \| null | Returns the value of the minimum value condition for the data bar. |
| [GetNegativeBarColor](./Methods/GetNegativeBarColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the negative bar color of the data bar. |
| [GetNegativeBorderColor](./Methods/GetNegativeBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the negative bar border color of the data bar. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | Returns the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | Returns the format condition operator. |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | Returns the pivot table condition object. |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object of the current format condition. |
| [GetPercentMax](./Methods/GetPercentMax.md) | number | Returns the percent maximum value of the data bar. |
| [GetPercentMin](./Methods/GetPercentMin.md) | number | Returns the percent minimum value of the data bar. |
| [GetPriority](./Methods/GetPriority.md) | number | Returns the priority value of the conditional formatting rule. |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | Returns the scope type of the conditional formatting rule. |
| [GetShowValue](./Methods/GetShowValue.md) | boolean | Returns whether the data bar displays the cell value. |
| [GetText](./Methods/GetText.md) | string | Returns the text value used in text-based conditional formatting rules. |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | Returns the text operator for text-based conditional formatting rules. |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the data bar conditional formatting rule. |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | Modifies the current format condition with the specified parameters. |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | None | Sets the cell range to which the current conditional formatting rule applies. |
| [SetAxisColor](./Methods/SetAxisColor.md) | None | Sets the axis color for the data bar conditional formatting rule. |
| [SetAxisPosition](./Methods/SetAxisPosition.md) | None | Sets the axis position for the data bar conditional formatting rule. |
| [SetBarBorderColor](./Methods/SetBarBorderColor.md) | None | Sets the bar border color for the data bar. |
| [SetBarColor](./Methods/SetBarColor.md) | None | Sets the bar color for the data bar. |
| [SetBarFillType](./Methods/SetBarFillType.md) | None | Sets the bar fill type for the data bar. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border style for the conditional formatting rule. |
| [SetDateOperator](./Methods/SetDateOperator.md) | None | Sets the date operator for time period conditions. |
| [SetDirection](./Methods/SetDirection.md) | None | Sets the direction for the data bar. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the background color to the format condition with the previously created color object. Sets 'No Fill' when previously created color object is null. |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | None | Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet. |
| [SetLastPriority](./Methods/SetLastPriority.md) | None | Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet. |
| [SetMaxPointType](./Methods/SetMaxPointType.md) | None | Sets the type for the maximum value condition for the data bar. |
| [SetMaxPointValue](./Methods/SetMaxPointValue.md) | None | Sets the value for the maximum value condition for the data bar. |
| [SetMinPointType](./Methods/SetMinPointType.md) | None | Sets the type for the minimum value condition for the data bar. |
| [SetMinPointValue](./Methods/SetMinPointValue.md) | None | Sets the value for the minimum value condition for the data bar. |
| [SetNegativeBarColor](./Methods/SetNegativeBarColor.md) | None | Sets the negative bar color for the data bar. |
| [SetNegativeBorderColor](./Methods/SetNegativeBorderColor.md) | None | Sets the negative bar border color for the data bar. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Sets the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [SetPercentMax](./Methods/SetPercentMax.md) | None | Sets the percent maximum value for the data bar. |
| [SetPercentMin](./Methods/SetPercentMin.md) | None | Sets the percent minimum value for the data bar. |
| [SetPriority](./Methods/SetPriority.md) | None | Sets the priority value of the conditional formatting rule. |
| [SetScopeType](./Methods/SetScopeType.md) | None | Sets the scope type for the conditional formatting rule. |
| [SetShowValue](./Methods/SetShowValue.md) | None | Specifies whether the data bar displays the cell value. |
| [SetText](./Methods/SetText.md) | None | Sets the text value used in text-based conditional formatting rules. |
| [SetTextOperator](./Methods/SetTextOperator.md) | None | Sets the text operator for text-based conditional formatting rules. |
