# SetTooltip

设置字段工具提示

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetTooltip(tooltip);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tooltip | 必需 | string \| null \| undefined |  | 字段的工具提示文本。 |

## 返回值

boolean

## 示例

在 PDF 中为表单字段设置工具提示。

```javascript editor-pdf
// Useful for adding helper text to a field.

// Assign a tooltip to a text field.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
```
