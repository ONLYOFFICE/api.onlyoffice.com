# SetRequired

设置字段为必填

继承自 [ApiBaseField.SetRequired](../../ApiBaseField/Methods/SetRequired.md)。

## 示例

在 PDF 中将表单字段标记为必填。

```javascript editor-pdf
// How do I make a form field required in a PDF?

// Check whether a field is marked as required in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```
