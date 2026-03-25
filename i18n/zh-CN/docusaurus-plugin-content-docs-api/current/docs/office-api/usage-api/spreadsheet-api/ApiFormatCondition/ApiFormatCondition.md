# ApiFormatCondition

表示 ApiFormatCondition 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AboveBelow | boolean | 返回或设置条件是应用于高于还是低于平均值。 |
| AppliesTo | [ApiRange](../ApiRange/ApiRange.md) | 返回此条件应用的区域。 |
| DateOperator | [XlTimePeriods](../Enumeration/XlTimePeriods.md) | 返回或设置时间段条件的日期运算符。 |
| FillColor | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回或设置格式条件的背景颜色。 |
| Formula1 | string | 返回或设置格式条件使用的第一个公式。 |
| Formula2 | string | 返回或设置格式条件使用的第二个公式。 |
| NumberFormat | string | 返回或设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| Operator | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | 返回格式条件运算符。 |
| PTCondition | PTCondition | 返回数据透视表条件对象。 |
| Parent | [ApiRange](../ApiRange/ApiRange.md) | 返回格式条件的父区域对象。 |
| PercentRank | boolean | 返回或设置排名是否基于百分比。 |
| Priority | number | 返回或设置条件的优先级。 |
| Rank | number | 返回或设置前/后条件格式规则的排名。 |
| ScopeType | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | 返回或设置格式条件的作用域类型。 |
| StdDev | number | 返回或设置平均值条件的标准偏差数。 |
| StopIfTrue | boolean | 返回或设置当此规则计算结果为 true 时是否应计算后续条件格式规则。 |
| Text | string | 返回或设置基于文本的条件的文本。 |
| TextOperator | [XlContainsOperator](../Enumeration/XlContainsOperator.md) | 返回或设置基于文本的条件的文本运算符。 |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回格式条件类型。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | 无 | 删除当前格式条件。 |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回当前条件格式规则应用的单元格区域。 |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | 返回时间段条件的日期运算符。 |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回格式条件的背景颜色。当格式条件的背景颜色为 null 时返回「无填充」。 |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | 返回当前格式条件应用的字体。 |
| [GetFormula1](./Methods/GetFormula1.md) | string | 返回当前条件格式规则使用的第一个公式。 |
| [GetFormula2](./Methods/GetFormula2.md) | string | 返回当前条件格式规则使用的第二个公式。 |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | 返回当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | 返回格式条件运算符。 |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | 返回数据透视表条件对象。 |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回当前格式条件的父区域对象。 |
| [GetPriority](./Methods/GetPriority.md) | number | 返回条件格式规则的优先级值。 |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | 返回条件格式规则的作用域类型。 |
| [GetText](./Methods/GetText.md) | string | 返回基于文本的条件格式规则中使用的文本值。 |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | 返回基于文本的条件格式规则的文本运算符。 |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回格式条件类型。 |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | 使用指定的参数修改当前格式条件。 |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | 无 | 设置当前条件格式规则应用的单元格区域。 |
| [SetBorders](./Methods/SetBorders.md) | 无 | 设置条件格式规则的边框样式。 |
| [SetDateOperator](./Methods/SetDateOperator.md) | 无 | 设置时间段条件的日期运算符。 |
| [SetFillColor](./Methods/SetFillColor.md) | 无 | 使用先前创建的颜色对象设置格式条件的背景颜色。当先前创建的颜色对象为 null 时设置为「无填充」。 |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | 无 | 将当前条件格式规则的优先级值设置为「1」，使其在工作表上的所有其他规则之前计算。 |
| [SetLastPriority](./Methods/SetLastPriority.md) | 无 | 设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。 |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | 无 | 设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [SetPriority](./Methods/SetPriority.md) | 无 | 设置条件格式规则的优先级值。 |
| [SetScopeType](./Methods/SetScopeType.md) | 无 | 设置条件格式规则的作用域类型。 |
| [SetText](./Methods/SetText.md) | 无 | 设置基于文本的条件格式规则中使用的文本值。 |
| [SetTextOperator](./Methods/SetTextOperator.md) | 无 | 设置基于文本的条件格式规则的文本运算符。 |
