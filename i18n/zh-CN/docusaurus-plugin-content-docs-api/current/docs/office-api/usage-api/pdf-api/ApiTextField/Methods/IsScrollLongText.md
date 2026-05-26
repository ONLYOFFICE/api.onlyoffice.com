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

检查 PDF 中的文本字段是否滚动超出其边界的文本。

```javascript editor-pdf
// How do I know if long text will scroll instead of wrap in a text field in a PDF?

// Determine whether a text input allows scrolling for content larger than the field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
