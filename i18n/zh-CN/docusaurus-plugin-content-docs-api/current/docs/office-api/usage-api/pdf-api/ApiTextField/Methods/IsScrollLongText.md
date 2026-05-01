# IsScrollLongText

检查文本字段是否可以滚动长文本。

## 语法

```javascript
expression.IsScrollLongText();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

获取文本字段并显示其在 PDF 文档中的长文本滚动属性。

```javascript editor-pdf
// How do I is scroll long text in a PDF document?

// Is scroll long text using a text field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
