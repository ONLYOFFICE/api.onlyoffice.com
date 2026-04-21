# GetValue

获取字段值

继承自 [ApiBaseField.GetValue](../../ApiBaseField/Methods/GetValue.md)。

## 示例

从 PDF 文档中的第一个文本字段获取值并设置到第二个文本字段。

```javascript editor-pdf
// How can I get the value using a base field in a PDF document?

// Get the value for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
```
