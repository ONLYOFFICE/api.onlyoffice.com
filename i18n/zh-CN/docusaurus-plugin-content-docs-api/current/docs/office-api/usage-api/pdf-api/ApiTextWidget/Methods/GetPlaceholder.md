# GetPlaceholder

获取文本字段占位符。

## 语法

```javascript
expression.GetPlaceholder();
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从 PDF 中的表单字段检索占位符文本。

```javascript editor-pdf
// How do I read the hint text in a form field in a PDF?

// Access the placeholder message displayed in a text input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
console.log('Text widget placeholder is: "' + widgets[0].GetPlaceholder() + '"');
```
