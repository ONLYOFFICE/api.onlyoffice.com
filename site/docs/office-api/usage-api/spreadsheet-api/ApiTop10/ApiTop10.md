# ApiTop10

Class representing a top 10 conditional formatting rule.

ApiTop10 is a subclass of [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md).

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Percent | boolean | Returns or sets whether the top 10 ranking is percentage-based. |
| Rank | number | Returns or sets the rank value of the top 10 condition. |
| TopBottom | [XlTopBottom](../Enumeration/XlTopBottom.md) | Returns or sets the "XlTopBottom" constant indicating whether the ranking is evaluated from the top or bottom. |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the top 10 conditional formatting rule. |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Deletes the top 10 conditional formatting rule. |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the range of cells to which the current conditional formatting rule applies. |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | Returns the date operator for time period conditions. |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the fill color for the top 10 conditional formatting rule. |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) | Returns the font formatting for the top 10 conditional formatting rule. |
| [GetFormula1](./Methods/GetFormula1.md) | string | Returns the first formula used by the current conditional formatting rule. |
| [GetFormula2](./Methods/GetFormula2.md) | string | Returns the second formula used by the current conditional formatting rule. |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | Returns the number format for the top 10 conditional formatting rule. |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | Returns the format condition operator. |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | Returns the pivot table condition object. |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the parent range object of the current format condition. |
| [GetPercent](./Methods/GetPercent.md) | boolean | Returns whether the top 10 ranking is percentage-based. |
| [GetPriority](./Methods/GetPriority.md) | number | Returns the priority value of the conditional formatting rule. |
| [GetRank](./Methods/GetRank.md) | number | Returns the rank value for the top 10 condition. |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | Returns the scope type of the conditional formatting rule. |
| [GetStopIfTrue](./Methods/GetStopIfTrue.md) | boolean | Returns whether the editor will stop evaluating additional formatting rules if this rule evaluates to true. |
| [GetText](./Methods/GetText.md) | string | Returns the text value used in text-based conditional formatting rules. |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | Returns the text operator for text-based conditional formatting rules. |
| [GetTopBottom](./Methods/GetTopBottom.md) | [XlTopBottom](../Enumeration/XlTopBottom.md) | Returns the "XlTopBottom" constant indicating whether the ranking is evaluated from the top or bottom. |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | Returns the type of the top 10 conditional formatting rule. |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | Modifies the current format condition with the specified parameters. |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | None | Modifies the cell range to which the current conditional formatting rule applies. |
| [SetBorders](./Methods/SetBorders.md) | None | Sets the border style for the conditional formatting rule. |
| [SetDateOperator](./Methods/SetDateOperator.md) | None | Sets the date operator for time period conditions. |
| [SetFillColor](./Methods/SetFillColor.md) | None | Sets the fill color for the top 10 conditional formatting rule. |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | None | Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet. |
| [SetLastPriority](./Methods/SetLastPriority.md) | None | Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet. |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | None | Sets the number format for the top 10 conditional formatting rule. |
| [SetPercent](./Methods/SetPercent.md) | None | Sets whether the top 10 ranking is percentage-based. |
| [SetPriority](./Methods/SetPriority.md) | None | Sets the priority value for the conditional formatting rule. |
| [SetRank](./Methods/SetRank.md) | None | Sets the rank value for the top 10 condition. |
| [SetScopeType](./Methods/SetScopeType.md) | None | Sets the scope type for the conditional formatting rule. |
| [SetStopIfTrue](./Methods/SetStopIfTrue.md) | None | Sets whether the editor will stop evaluating additional formatting rules if this rule evaluates to true. |
| [SetText](./Methods/SetText.md) | None | Sets the text value used in text-based conditional formatting rules. |
| [SetTextOperator](./Methods/SetTextOperator.md) | None | Sets the text operator for text-based conditional formatting rules. |
| [SetTopBottom](./Methods/SetTopBottom.md) | None | Sets the "XlTopBottom" constant indicating whether the ranking is evaluated from the top or bottom. |
