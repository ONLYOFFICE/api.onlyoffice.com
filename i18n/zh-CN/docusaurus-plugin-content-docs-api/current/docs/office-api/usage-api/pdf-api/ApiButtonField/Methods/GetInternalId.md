# GetInternalId

返回当前字段的内部 ID。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiBaseField.GetInternalId](../../ApiBaseField/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiButtonField](../ApiButtonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表单字段的内部标识符。

```javascript editor-pdf
// Useful for retrieving a field's internal ID.

// Create a text field and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

console.log(`Field internal ID is: ${textField.GetInternalId()}`);
```
