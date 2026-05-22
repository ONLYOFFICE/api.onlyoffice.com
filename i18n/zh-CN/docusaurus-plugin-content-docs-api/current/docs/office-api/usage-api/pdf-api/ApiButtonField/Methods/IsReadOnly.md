# IsReadOnly

检查字段是否为只读

继承自 [ApiBaseField.IsReadOnly](../../ApiBaseField/Methods/IsReadOnly.md)。

## 示例

检查 PDF 中的表单字段是否已锁定以防止编辑。

```javascript editor-pdf
// How can I determine if a form field is read-only in a PDF?

// Verify the read-only status of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
