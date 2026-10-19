# GetActionsJSON

获取 JSON 格式的所有字段操作。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

继承自 [ApiBaseWidget.GetActionsJSON](../../ApiBaseWidget/Methods/GetActionsJSON.md)。

## 语法

```javascript
expression.GetActionsJSON();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在 PDF 中以 JSON 格式获取字段控件的操作。

```javascript editor-pdf
// Useful for inspecting actions assigned to a widget.

// Read the actions JSON object from a field widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let actionsJSON = widgets[0].GetActionsJSON();
console.log(JSON.stringify(actionsJSON));
```
