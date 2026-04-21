# SetFullName

如果可能，设置新的字段名称。

继承自 [ApiBaseField.SetFullName](../../ApiBaseField/Methods/SetFullName.md)。

## 示例

在 PDF 文档中设置字段全名并显示。

```javascript editor-pdf
// How do I set full name in a PDF document?

// Set full name using a base field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```
