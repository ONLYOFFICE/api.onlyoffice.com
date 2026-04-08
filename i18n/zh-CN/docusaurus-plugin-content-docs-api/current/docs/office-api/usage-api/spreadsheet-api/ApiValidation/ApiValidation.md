# ApiValidation

表示 ApiValidation 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AlertStyle | [ValidationAlertStyle](../Enumeration/ValidationAlertStyle.md) | 返回验证警报样式。 |
| ErrorMessage | string | 返回或设置数据验证错误消息。 |
| ErrorTitle | string | 返回或设置数据验证错误对话框的标题。 |
| Formula1 | string | 返回与条件格式或数据验证关联的值或表达式。 |
| Formula2 | string | 返回与条件格式或数据验证第二部分关联的值或表达式。 |
| IgnoreBlank | boolean | 返回或设置一个布尔值，指定区域数据验证是否允许空值。 |
| InCellDropdown | boolean | 返回或设置一个布尔值，指示数据验证是否显示包含可接受值的下拉列表。 |
| InputMessage | string | 返回或设置数据验证输入消息。 |
| InputTitle | string | 返回或设置数据验证输入对话框的标题。 |
| Operator | [ValidationOperator](../Enumeration/ValidationOperator.md) | 返回数据验证运算符。 |
| Parent | [ApiRange](../ApiRange/ApiRange.md) | 返回父区域对象。 |
| ShowError | boolean | 返回或设置一个布尔值，指示每当用户输入无效数据时是否显示数据验证错误消息。 |
| ShowInput | boolean | 返回或设置一个布尔值，指示每当用户选择数据验证区域中的单元格时是否显示数据验证输入消息。 |
| Type | [ValidationType](../Enumeration/ValidationType.md) | 返回验证类型。 |
| Value | string | 返回验证值。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiValidation](../ApiValidation/ApiValidation.md) \| null | 将数据验证添加到指定区域。 |
| [Delete](./Methods/Delete.md) | 无 | 删除对象。 |
| [GetAlertStyle](./Methods/GetAlertStyle.md) | [ValidationAlertStyle](../Enumeration/ValidationAlertStyle.md) | 返回验证警报样式。 |
| [GetErrorMessage](./Methods/GetErrorMessage.md) | string | 返回数据验证错误消息。 |
| [GetErrorTitle](./Methods/GetErrorTitle.md) | string | 返回数据验证错误对话框的标题。 |
| [GetFormula1](./Methods/GetFormula1.md) | string | 返回数据验证中的第一个公式。 |
| [GetFormula2](./Methods/GetFormula2.md) | string | 返回数据验证中的第二个公式。 |
| [GetIgnoreBlank](./Methods/GetIgnoreBlank.md) | boolean | 返回区域数据验证是否允许空值。 |
| [GetInCellDropdown](./Methods/GetInCellDropdown.md) | boolean | 返回数据验证是否显示包含可接受值的下拉列表。 |
| [GetInputMessage](./Methods/GetInputMessage.md) | string | 返回数据验证输入消息。 |
| [GetInputTitle](./Methods/GetInputTitle.md) | string | 返回数据验证输入对话框的标题。 |
| [GetOperator](./Methods/GetOperator.md) | [ValidationOperator](../Enumeration/ValidationOperator.md) | 返回数据验证运算符。 |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回父区域对象。 |
| [GetShowError](./Methods/GetShowError.md) | boolean | 返回是否显示数据验证错误消息。 |
| [GetShowInput](./Methods/GetShowInput.md) | boolean | 返回是否显示数据验证输入消息。 |
| [GetType](./Methods/GetType.md) | [ValidationType](../Enumeration/ValidationType.md) | 返回验证类型。 |
| [Modify](./Methods/Modify.md) | [ApiValidation](../ApiValidation/ApiValidation.md) \| null | 修改区域的数据验证。 |
| [SetErrorMessage](./Methods/SetErrorMessage.md) | 无 | 设置数据验证错误消息。 |
| [SetErrorTitle](./Methods/SetErrorTitle.md) | 无 | 设置数据验证错误对话框的标题。 |
| [SetIgnoreBlank](./Methods/SetIgnoreBlank.md) | 无 | 设置区域数据验证是否允许空值。 |
| [SetInCellDropdown](./Methods/SetInCellDropdown.md) | 无 | 设置数据验证是否显示包含可接受值的下拉列表。 |
| [SetInputMessage](./Methods/SetInputMessage.md) | 无 | 设置数据验证输入消息。 |
| [SetInputTitle](./Methods/SetInputTitle.md) | 无 | 设置数据验证输入对话框的标题。 |
| [SetShowError](./Methods/SetShowError.md) | 无 | 设置是否显示数据验证错误消息。 |
| [SetShowInput](./Methods/SetShowInput.md) | 无 | 设置是否显示数据验证输入消息。 |
