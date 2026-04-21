# GetRect

设置字段矩形。

## 语法

```javascript
expression.GetRect();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

在 PDF 文档中创建新字段并获取其控件的矩形。

```javascript editor-pdf
// How to get the rect for a widget in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```
