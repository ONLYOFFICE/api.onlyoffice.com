# SetPartialName

设置新的字段部分名称。

继承自 [ApiBaseField.SetPartialName](../../ApiBaseField/Methods/SetPartialName.md)。

## 示例

在 PDF 文档中设置字段部分名称并显示。

```javascript editor-pdf
// How can I set partial name using a base field in a PDF document?

// Set partial name for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
