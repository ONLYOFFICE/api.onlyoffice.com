# SetValue

设置字段值

继承自 [ApiBaseField.SetValue](../../ApiBaseField/Methods/SetValue.md)。

## 示例

在 PDF 中向表单字段输入文本。

```javascript editor-pdf
// How do I fill in a form field in a PDF?

// Set a text value for a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```
