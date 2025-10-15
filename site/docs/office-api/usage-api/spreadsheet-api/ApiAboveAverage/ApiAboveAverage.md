# ApiAboveAverage

Represents the ApiAboveAverage class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AboveBelow | boolean | Returns or sets whether the rule is configured to detect values above or below the average. |
| NumStdDev | number | Returns or sets the number of standard deviations from the average. |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the above average conditional formatting rule. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Deletes the current format condition. |
| [GetAboveBelow](./Methods/GetAboveBelow.md) | boolean | Returns whether the rule is configured to detect values above or below the average. |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of cells to which the current conditional formatting rule applies. |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | Returns the date operator for time period conditions. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | Returns the background color for the format condition. Returns 'No Fill' when the background color of the format condition is null. |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | Returns the font applied by the current format condition. |
| [GetFormula1](./Methods/GetFormula1.md) | string | Returns the first formula used by the current conditional formatting rule. |
| [GetFormula2](./Methods/GetFormula2.md) | string | Returns the second formula used by the current conditional formatting rule. |
| [GetNumStdDev](./Methods/GetNumStdDev.md) | number | Returns the number of standard deviations from the average. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | Returns the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | Returns the format condition operator. |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | Returns the pivot table condition object. |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object of the current format condition. |
| [GetPriority](./Methods/GetPriority.md) | number | Returns the priority value of the conditional formatting rule. |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | Returns the scope type of the conditional formatting rule. |
| [GetText](./Methods/GetText.md) | string | Returns the text value used in text-based conditional formatting rules. |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | Returns the text operator for text-based conditional formatting rules. |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the above average conditional formatting rule. |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | Modifies the current format condition with the specified parameters. |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | None | Sets the cell range to which the current conditional formatting rule applies. |
| [SetAboveBelow](./Methods/SetAboveBelow.md) | None | Sets whether the rule targets values above or below the average. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border style for the conditional formatting rule. |
| [SetDateOperator](./Methods/SetDateOperator.md) | None | Sets the date operator for time period conditions. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the background color to the format condition with the previously created color object. Sets 'No Fill' when previously created color object is null. |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | None | Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet. |
| [SetLastPriority](./Methods/SetLastPriority.md) | None | Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet. |
| [SetNumStdDev](./Methods/SetNumStdDev.md) | None | Sets the number of standard deviations from the average. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Sets the number format applied to a cell when the conditional formatting rule evaluates to true. |
| [SetPriority](./Methods/SetPriority.md) | None | Sets the priority value of the conditional formatting rule. |
| [SetScopeType](./Methods/SetScopeType.md) | None | Sets the scope type for the conditional formatting rule. |
| [SetText](./Methods/SetText.md) | None | Sets the text value used in text-based conditional formatting rules. |
| [SetTextOperator](./Methods/SetTextOperator.md) | None | Sets the text operator for text-based conditional formatting rules. |
