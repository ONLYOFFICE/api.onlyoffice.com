# GetRegularExp

获取文本控件的正则验证表达式。

## 语法

```javascript
expression.GetRegularExp();
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 文档中的文本控件获取正则表达式并显示。

```javascript editor-pdf
// How can I get the regular exp using a text widget in a PDF document?

// Get the regular exp for a text widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetRegularExp('\S+@\S+\.\S+');
console.log('Text widget reg exp is: "' + widgets[0].GetRegularExp() + '"');
```
