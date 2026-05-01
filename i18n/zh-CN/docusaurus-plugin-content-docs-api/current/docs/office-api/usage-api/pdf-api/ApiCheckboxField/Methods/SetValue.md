# SetValue

设置字段值

继承自 [ApiBaseField.SetValue](../../ApiBaseField/Methods/SetValue.md)。

## 示例

在 PDF 文档中为文本字段设置值。

```javascript editor-pdf
// How can I set value using a base field in a PDF document?

// Set value for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```
