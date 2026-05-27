# SetReadOnly

设置字段为只读

继承自 [ApiBaseField.SetReadOnly](../../ApiBaseField/Methods/SetReadOnly.md)。

## 示例

锁定 PDF 中的表单字段以防止编辑。

```javascript editor-pdf
// How do I make a form field read-only in a PDF?

// Disable editing on a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
