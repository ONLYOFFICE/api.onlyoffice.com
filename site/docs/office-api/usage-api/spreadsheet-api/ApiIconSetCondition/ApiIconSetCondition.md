# ApiIconSetCondition

Represents the ApiIconSetCondition class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Formula | string | Returns the formula associated with the icon set condition. |
| IconCriteria | [ApiIconCriterion](../ApiIconCriterion/ApiIconCriterion.md)[] | Returns a collection of icon criteria that represent the threshold values and icons for the icon set conditional formatting rule. |
| IconSet | [XlIconSet](../Enumeration/XlIconSet.md) | Returns or sets the icon set type used in the conditional formatting rule. |
| PercentileValues | boolean | Returns or sets whether the thresholds for the icon set conditional format are determined by using percentiles. |
| ReverseOrder | boolean | Returns or sets whether the icon order in the icon set rule is reversed. |
| ShowIconOnly | boolean | Returns or sets whether to display only icons in the icon set rule (without cell values). |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the icon set conditional formatting rule. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Deletes the current format condition. |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of cells to which the current conditional formatting rule applies. |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | Returns the date operator for time period conditions. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns the background color for the format condition. Returns 'No Fill' when the background color of the format condition is null. |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | Returns the font applied by the current format condition. |
| [GetFormula](./Methods/GetFormula.md) | string | Returns the formula associated with the icon set condition. |
| [GetFormula1](./Methods/GetFormula1.md) | string | Returns the first formula used by the current conditional formatting rule. |
| [GetFormula2](./Methods/GetFormula2.md) | string | Returns the second formula used by the current conditional formatting rule. |
| [GetIconCriteria](./Methods/GetIconCriteria.md) | [ApiIconCriterion](../ApiIconCriterion/ApiIconCriterion.md)[] \| null | Returns a collection of icon criteria that represent the threshold values and icons for the icon set conditional formatting rule. |
| [GetIconSet](./Methods/GetIconSet.md) | [XlIconSet](../Enumeration/XlIconSet.md) \| null | Returns the icon set type used in the conditional formatting rule. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | Returns the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | Returns the format condition operator. |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | Returns the pivot table condition object. |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object of the current format condition. |
| [GetPercentileValues](./Methods/GetPercentileValues.md) | boolean | Returns whether the thresholds for the icon set conditional format are determined by using percentiles. |
| [GetPriority](./Methods/GetPriority.md) | number | Returns the priority value of the conditional formatting rule. |
| [GetReverseOrder](./Methods/GetReverseOrder.md) | boolean \| null | Returns whether the icon order in the icon set rule is reversed. |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | Returns the scope type of the conditional formatting rule. |
| [GetShowIconOnly](./Methods/GetShowIconOnly.md) | boolean \| null | Returns whether only icons are displayed in the icon set rule (without cell values). |
| [GetText](./Methods/GetText.md) | string | Returns the text value used in text-based conditional formatting rules. |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | Returns the text operator for text-based conditional formatting rules. |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the icon set conditional formatting rule. |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | Modifies the current format condition with the specified parameters. |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | None | Sets the cell range to which the current conditional formatting rule applies. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border style for the conditional formatting rule. |
| [SetDateOperator](./Methods/SetDateOperator.md) | None | Sets the date operator for time period conditions. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the background color to the format condition with the previously created color object. Sets 'No Fill' when previously created color object is null. |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | None | Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet. |
| [SetIconSet](./Methods/SetIconSet.md) | boolean | Sets the icon set type for the conditional formatting rule. |
| [SetLastPriority](./Methods/SetLastPriority.md) | None | Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Sets the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [SetPercentileValues](./Methods/SetPercentileValues.md) | boolean | Specifies whether the thresholds for the icon set conditional format are determined by using percentiles. |
| [SetPriority](./Methods/SetPriority.md) | None | Sets the priority value of the conditional formatting rule. |
| [SetReverseOrder](./Methods/SetReverseOrder.md) | boolean | Specifies whether the icon order in the icon set rule is reversed. |
| [SetScopeType](./Methods/SetScopeType.md) | None | Sets the scope type for the conditional formatting rule. |
| [SetShowIconOnly](./Methods/SetShowIconOnly.md) | boolean | Specifies whether to display only icons in the icon set rule (without cell values). |
| [SetText](./Methods/SetText.md) | None | Sets the text value used in text-based conditional formatting rules. |
| [SetTextOperator](./Methods/SetTextOperator.md) | None | Sets the text operator for text-based conditional formatting rules. |
