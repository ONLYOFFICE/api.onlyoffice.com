# SetPercentageFormat

设置字段的百分比格式。

## 语法

```javascript
expression.SetPercentageFormat(nDemical, sSepStyle);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDemical | 必需 | number |  | 小数位数 |
| sSepStyle | 必需 | [NumberSepStyle](../../Enumeration/NumberSepStyle.md) |  | 数字分隔样式 |

## 返回值

boolean

## 示例

This example gets text field and sets percentage format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);

```
