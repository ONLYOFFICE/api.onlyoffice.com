# SetValidateRange

设置字段的验证范围。
💡 只能应用于具有百分比或数字格式的字段。

## 语法

```javascript
expression.SetValidateRange(bGreaterThan, nGreaterThan, bLessThan, nLessThan);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGreaterThan | 可选 | boolean | false | 如果为 true，则使用 `nGreaterThan` 启用最小值检查。 |
| nGreaterThan | 必需 | number |  | 允许的最小值（根据实现方式为包含或不包含）。 |
| bLessThan | 可选 | boolean | false | 如果为 true，则使用 `nLessThan` 启用最大值检查。 |
| nLessThan | 必需 | number |  | 允许的最大值（根据实现方式为包含或不包含）。 |

## 返回值

boolean

## 示例

This example gets text field and sets validate range for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValidateRange(true, 0, true, 5);
comboboxField.SetValue('10');

```
