# GetInternalId

返回当前字段控件的内部 ID。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表单字段控件的内部标识符。

```javascript editor-pdf
// How do I retrieve a widget's internal ID?

// Create a text field and print the internal ID of its widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Widget internal ID is: ${widgets[0].GetInternalId()}`);
```
