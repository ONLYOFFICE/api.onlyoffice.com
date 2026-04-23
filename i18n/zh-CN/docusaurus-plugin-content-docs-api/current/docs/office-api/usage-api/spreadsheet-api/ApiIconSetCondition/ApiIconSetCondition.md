# ApiIconSetCondition

表示 ApiIconSetCondition 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Formula | string | 返回与图标集条件关联的公式。 |
| IconCriteria | [ApiIconCriterion](../ApiIconCriterion/ApiIconCriterion.md)[] | 返回表示图标集条件格式规则的阈值和图标的图标条件集合。 |
| IconSet | [XlIconSet](../Enumeration/XlIconSet.md) | 返回或设置条件格式规则中使用的图标集类型。 |
| PercentileValues | boolean | 返回或设置图标集条件格式的阈值是否使用百分位数确定。 |
| ReverseOrder | boolean | 返回或设置图标集规则中的图标顺序是否反转。 |
| ShowIconOnly | boolean | 返回或设置是否在图标集规则中仅显示图标（不显示单元格值）。 |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回图标集条件格式规则的类型。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | 无 | 删除当前格式条件。 |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回当前条件格式规则应用的单元格区域。 |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | 返回时间段条件的日期运算符。 |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回格式条件的背景颜色。当格式条件的背景颜色为 null 时返回「无填充」。 |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | 返回当前格式条件应用的字体。 |
| [GetFormula](./Methods/GetFormula.md) | string | 返回与图标集条件关联的公式。 |
| [GetFormula1](./Methods/GetFormula1.md) | string | 返回当前条件格式规则使用的第一个公式。 |
| [GetFormula2](./Methods/GetFormula2.md) | string | 返回当前条件格式规则使用的第二个公式。 |
| [GetIconCriteria](./Methods/GetIconCriteria.md) | [ApiIconCriterion](../ApiIconCriterion/ApiIconCriterion.md)[] \| null | 返回表示图标集条件格式规则的阈值和图标的图标条件集合。 |
| [GetIconSet](./Methods/GetIconSet.md) | [XlIconSet](../Enumeration/XlIconSet.md) \| null | 返回条件格式规则中使用的图标集类型。 |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | 返回当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | 返回格式条件运算符。 |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | 返回数据透视表条件对象。 |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回当前格式条件的父区域对象。 |
| [GetPercentileValues](./Methods/GetPercentileValues.md) | boolean | 返回图标集条件格式的阈值是否使用百分位数确定。 |
| [GetPriority](./Methods/GetPriority.md) | number | 返回条件格式规则的优先级值。 |
| [GetReverseOrder](./Methods/GetReverseOrder.md) | boolean \| null | 返回图标集规则中的图标顺序是否反转。 |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | 返回条件格式规则的作用域类型。 |
| [GetShowIconOnly](./Methods/GetShowIconOnly.md) | boolean \| null | 返回图标集规则中是否仅显示图标（不显示单元格值）。 |
| [GetText](./Methods/GetText.md) | string | 返回基于文本的条件格式规则中使用的文本值。 |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | 返回基于文本的条件格式规则的文本运算符。 |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回图标集条件格式规则的类型。 |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | 使用指定的参数修改当前格式条件。 |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | 无 | 设置当前条件格式规则应用的单元格区域。 |
| [SetBorders](./Methods/SetBorders.md) | 无 | 设置条件格式规则的边框样式。 |
| [SetDateOperator](./Methods/SetDateOperator.md) | 无 | 设置时间段条件的日期运算符。 |
| [SetFillColor](./Methods/SetFillColor.md) | 无 | 使用先前创建的颜色对象设置格式条件的背景颜色。当先前创建的颜色对象为 null 时设置为「无填充」。 |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | 无 | 将当前条件格式规则的优先级值设置为「1」，使其在工作表上的所有其他规则之前计算。 |
| [SetIconSet](./Methods/SetIconSet.md) | boolean | 设置条件格式规则的图标集类型。 |
| [SetLastPriority](./Methods/SetLastPriority.md) | 无 | 设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。 |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | 无 | 设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [SetPercentileValues](./Methods/SetPercentileValues.md) | boolean | 指定图标集条件格式的阈值是否使用百分位数确定。 |
| [SetPriority](./Methods/SetPriority.md) | 无 | 设置条件格式规则的优先级值。 |
| [SetReverseOrder](./Methods/SetReverseOrder.md) | boolean | 指定图标集规则中的图标顺序是否反转。 |
| [SetScopeType](./Methods/SetScopeType.md) | 无 | 设置条件格式规则的作用域类型。 |
| [SetShowIconOnly](./Methods/SetShowIconOnly.md) | boolean | 指定是否在图标集规则中仅显示图标（不显示单元格值）。 |
| [SetText](./Methods/SetText.md) | 无 | 设置基于文本的条件格式规则中使用的文本值。 |
| [SetTextOperator](./Methods/SetTextOperator.md) | 无 | 设置基于文本的条件格式规则的文本运算符。 |
