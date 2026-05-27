# IsComb

检查文本字段是否使用梳状格式。

## 语法

```javascript
expression.IsComb();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的文本字段是否使用梳状字符间距。

```javascript editor-pdf
// How do I know if a text field is set to display characters in separate boxes in a PDF?

// Verify if the comb format is enabled for a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is:' + textField.IsComb());
```
