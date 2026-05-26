# SetPartialName

设置新的字段部分名称。

继承自 [ApiBaseField.SetPartialName](../../ApiBaseField/Methods/SetPartialName.md)。

## 示例

在 PDF 中为表单字段分配本地名称。

```javascript editor-pdf
// How do I set the local name for a form field in a PDF?

// Define the partial name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
