# GetFullName

获取字段完整名称。

继承自 [ApiBaseField.GetFullName](../../ApiBaseField/Methods/GetFullName.md)。

## 示例

获取并显示 PDF 文档中的字段全名。

```javascript editor-pdf
// How can I get the full name using a base field in a PDF document?

// Get the full name for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Field full name is: ' + textField.GetFullName());
```
