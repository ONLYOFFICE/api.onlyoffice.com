# ApiDatabar

表示 ApiDatabar 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AxisPosition | [XlDataBarAxisPosition](../Enumeration/XlDataBarAxisPosition.md) | 返回或设置数据条条件格式规则的轴位置。 |
| BarFillType | [XlDataBarFillType](../Enumeration/XlDataBarFillType.md) | 返回或设置数据条的填充类型。 |
| Direction | [XlReadingOrder](../Enumeration/XlReadingOrder.md) | 返回或设置数据条的方向。 |
| Formula | string | 返回数据条的公式。 |
| MaxPoint | object | 返回数据条的最大值条件。 |
| MinPoint | object | 返回数据条的最小值条件。 |
| NegativeBarColor | [ApiColor](../ApiColor/ApiColor.md) | 返回或设置数据条的负值条颜色。 |
| NegativeBorderColor | [ApiColor](../ApiColor/ApiColor.md) | 返回或设置数据条的负值条边框颜色。 |
| PercentMax | number | 返回或设置数据条的百分比最大值。 |
| PercentMin | number | 返回或设置数据条的百分比最小值。 |
| ShowValue | boolean | 返回或设置数据条是显示还是隐藏单元格值。 |
| Type | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回数据条条件格式规则的类型。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | 无 | 删除当前格式条件。 |
| [GetAppliesTo](./Methods/GetAppliesTo.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回当前条件格式规则应用的单元格区域。 |
| [GetAxisColor](./Methods/GetAxisColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回数据条条件格式规则的轴颜色。 |
| [GetAxisPosition](./Methods/GetAxisPosition.md) | [XlDataBarAxisPosition](../Enumeration/XlDataBarAxisPosition.md) | 返回数据条条件格式规则的轴位置。 |
| [GetBarBorderColor](./Methods/GetBarBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回数据条的边框颜色。 |
| [GetBarColor](./Methods/GetBarColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回数据条的颜色。 |
| [GetBarFillType](./Methods/GetBarFillType.md) | [XlDataBarFillType](../Enumeration/XlDataBarFillType.md) | 返回数据条的填充类型。 |
| [GetDateOperator](./Methods/GetDateOperator.md) | [XlTimePeriods](../Enumeration/XlTimePeriods.md) \| null | 返回时间段条件的日期运算符。 |
| [GetDirection](./Methods/GetDirection.md) | [XlReadingOrder](../Enumeration/XlReadingOrder.md) | 返回数据条的方向。 |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回格式条件的背景颜色。当格式条件的背景颜色为 null 时返回「无填充」。 |
| [GetFont](./Methods/GetFont.md) | [ApiFont](../ApiFont/ApiFont.md) \| null | 返回当前格式条件应用的字体。 |
| [GetFormula](./Methods/GetFormula.md) | string | 返回数据条的公式。 |
| [GetFormula1](./Methods/GetFormula1.md) | string | 返回当前条件格式规则使用的第一个公式。 |
| [GetFormula2](./Methods/GetFormula2.md) | string | 返回当前条件格式规则使用的第二个公式。 |
| [GetMaxPointType](./Methods/GetMaxPointType.md) | [XlConditionValueTypes](../Enumeration/XlConditionValueTypes.md) \| null | 返回数据条最大值条件的类型。 |
| [GetMaxPointValue](./Methods/GetMaxPointValue.md) | string \| number \| null | 返回数据条最大值条件的值。 |
| [GetMinPointType](./Methods/GetMinPointType.md) | [XlConditionValueTypes](../Enumeration/XlConditionValueTypes.md) \| null | 返回数据条最小值条件的类型。 |
| [GetMinPointValue](./Methods/GetMinPointValue.md) | string \| number \| null | 返回数据条最小值条件的值。 |
| [GetNegativeBarColor](./Methods/GetNegativeBarColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回数据条的负值条颜色。 |
| [GetNegativeBorderColor](./Methods/GetNegativeBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回数据条的负值条边框颜色。 |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string | 返回当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [GetOperator](./Methods/GetOperator.md) | [XlFormatConditionOperator](../Enumeration/XlFormatConditionOperator.md) | 返回格式条件运算符。 |
| [GetPTCondition](./Methods/GetPTCondition.md) | PTCondition \| null | 返回数据透视表条件对象。 |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回当前格式条件的父区域对象。 |
| [GetPercentMax](./Methods/GetPercentMax.md) | number | 返回数据条的百分比最大值。 |
| [GetPercentMin](./Methods/GetPercentMin.md) | number | 返回数据条的百分比最小值。 |
| [GetPriority](./Methods/GetPriority.md) | number | 返回条件格式规则的优先级值。 |
| [GetScopeType](./Methods/GetScopeType.md) | [XlPivotConditionScope](../Enumeration/XlPivotConditionScope.md) | 返回条件格式规则的作用域类型。 |
| [GetShowValue](./Methods/GetShowValue.md) | boolean | 返回数据条是否显示单元格值。 |
| [GetText](./Methods/GetText.md) | string | 返回基于文本的条件格式规则中使用的文本值。 |
| [GetTextOperator](./Methods/GetTextOperator.md) | [XlContainsOperator](../Enumeration/XlContainsOperator.md) \| null | 返回基于文本的条件格式规则的文本运算符。 |
| [GetType](./Methods/GetType.md) | [XlFormatConditionType](../Enumeration/XlFormatConditionType.md) | 返回数据条条件格式规则的类型。 |
| [Modify](./Methods/Modify.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | 使用指定的参数修改当前格式条件。 |
| [ModifyAppliesToRange](./Methods/ModifyAppliesToRange.md) | 无 | 设置当前条件格式规则应用的单元格区域。 |
| [SetAxisColor](./Methods/SetAxisColor.md) | 无 | 设置数据条条件格式规则的轴颜色。 |
| [SetAxisPosition](./Methods/SetAxisPosition.md) | 无 | 设置数据条条件格式规则的轴位置。 |
| [SetBarBorderColor](./Methods/SetBarBorderColor.md) | 无 | 设置数据条的边框颜色。 |
| [SetBarColor](./Methods/SetBarColor.md) | 无 | 设置数据条的颜色。 |
| [SetBarFillType](./Methods/SetBarFillType.md) | 无 | 设置数据条的填充类型。 |
| [SetBorders](./Methods/SetBorders.md) | 无 | 设置条件格式规则的边框样式。 |
| [SetDateOperator](./Methods/SetDateOperator.md) | 无 | 设置时间段条件的日期运算符。 |
| [SetDirection](./Methods/SetDirection.md) | 无 | 设置数据条的方向。 |
| [SetFillColor](./Methods/SetFillColor.md) | 无 | 使用先前创建的颜色对象设置格式条件的背景颜色。当先前创建的颜色对象为 null 时设置为「无填充」。 |
| [SetFirstPriority](./Methods/SetFirstPriority.md) | 无 | 将当前条件格式规则的优先级值设置为「1」，使其在工作表上的所有其他规则之前计算。 |
| [SetLastPriority](./Methods/SetLastPriority.md) | 无 | 设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。 |
| [SetMaxPointType](./Methods/SetMaxPointType.md) | 无 | 设置数据条最大值条件的类型。 |
| [SetMaxPointValue](./Methods/SetMaxPointValue.md) | 无 | 设置数据条最大值条件的值。 |
| [SetMinPointType](./Methods/SetMinPointType.md) | 无 | 设置数据条最小值条件的类型。 |
| [SetMinPointValue](./Methods/SetMinPointValue.md) | 无 | 设置数据条最小值条件的值。 |
| [SetNegativeBarColor](./Methods/SetNegativeBarColor.md) | 无 | 设置数据条的负值条颜色。 |
| [SetNegativeBorderColor](./Methods/SetNegativeBorderColor.md) | 无 | 设置数据条的负值条边框颜色。 |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | 无 | 设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。 |
| [SetPercentMax](./Methods/SetPercentMax.md) | 无 | 设置数据条的百分比最大值。 |
| [SetPercentMin](./Methods/SetPercentMin.md) | 无 | 设置数据条的百分比最小值。 |
| [SetPriority](./Methods/SetPriority.md) | 无 | 设置条件格式规则的优先级值。 |
| [SetScopeType](./Methods/SetScopeType.md) | 无 | 设置条件格式规则的作用域类型。 |
| [SetShowValue](./Methods/SetShowValue.md) | 无 | 指定数据条是否显示单元格值。 |
| [SetText](./Methods/SetText.md) | 无 | 设置基于文本的条件格式规则中使用的文本值。 |
| [SetTextOperator](./Methods/SetTextOperator.md) | 无 | 设置基于文本的条件格式规则的文本运算符。 |
