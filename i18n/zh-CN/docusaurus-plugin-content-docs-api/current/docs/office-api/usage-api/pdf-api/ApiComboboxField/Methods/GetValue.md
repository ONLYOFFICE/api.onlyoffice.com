# GetValue

获取字段值

继承自 [ApiBaseField.GetValue](../../ApiBaseField/Methods/GetValue.md)。

## 示例

在 PDF 中将文本从一个表单字段复制到另一个。

```javascript editor-pdf
// How do I read the value entered in a form field in a PDF?

// Transfer text content between form fields in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
```
