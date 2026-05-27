# Delete

从父字段中移除控件。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 移除表单字段控件。

```javascript editor-pdf
// How do I delete a widget from a form field in a PDF?

// Unlink a widget instance from its parent form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets[0].Delete();
```
