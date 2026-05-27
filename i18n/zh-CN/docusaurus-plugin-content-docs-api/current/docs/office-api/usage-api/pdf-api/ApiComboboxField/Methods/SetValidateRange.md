# SetValidateRange

设置字段的验证范围。
💡 只能应用于具有百分比或数字格式的字段。

## 语法

```javascript
expression.SetValidateRange(greaterThan, greaterThanValue, lessThan, lessThanValue);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| greaterThan | 可选 | boolean | false | 如果为 true，使用 `greaterThanValue` 启用最小值验证。 |
| greaterThanValue | 必需 | number |  | 允许的最小值。 |
| lessThan | 可选 | boolean | false | 如果为 true，使用 `lessThanValue` 启用最大值验证。 |
| lessThanValue | 必需 | number |  | 允许的最大值。 |

## 返回值

boolean

## 示例

将 PDF 中的字段值限制在数字范围内。

```javascript editor-pdf
// Can I restrict numbers to a minimum and maximum in a PDF?

// Accept only numbers within specified bounds in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValidateRange(true, 0, true, 5);
comboboxField.SetValue('10');
```
