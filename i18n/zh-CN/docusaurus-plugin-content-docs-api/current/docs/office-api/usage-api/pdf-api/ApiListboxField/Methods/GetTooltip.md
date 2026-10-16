# GetTooltip

获取字段工具提示

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiBaseField.GetTooltip](../../ApiBaseField/Methods/GetTooltip.md)。

## 语法

```javascript
expression.GetTooltip();
```

`expression` - 表示 [ApiListboxField](../ApiListboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取 PDF 中表单字段的工具提示。

```javascript editor-pdf
// Useful for getting the helper text assigned to a field.

// Set a field tooltip and read it back.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
textField.SetValue(textField.GetTooltip());
```
