# SetPercentageFormat

设置字段的百分比格式。

## 语法

```javascript
expression.SetPercentageFormat(decimalPlaces, separatorStyle);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| decimalPlaces | 必需 | number |  | 小数点后的位数。 |
| separatorStyle | 必需 | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | 数字分隔符样式。 |

## 返回值

boolean

## 示例

在 PDF 文本字段中将数字转换并显示为百分比。

```javascript editor-pdf
// How do I show decimal values as percentages in a PDF?

// Apply percentage formatting to text input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);
```
