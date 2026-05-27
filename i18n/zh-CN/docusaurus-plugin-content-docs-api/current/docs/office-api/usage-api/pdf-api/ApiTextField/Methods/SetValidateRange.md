# SetValidateRange

设置字段的验证范围。
💡 只能应用于具有百分比或数字格式的字段。

## 语法

```javascript
expression.SetValidateRange(greaterThan, greaterThanValue, lessThan, lessThanValue);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

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

为 PDF 中的文本字段设置值限制。

```javascript editor-pdf
// How do I restrict what numbers can be entered in a text field in a PDF?

// Define the minimum and maximum allowed values for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValidateRange(true, 0, true, 5);
textField.SetValue('10');
```
