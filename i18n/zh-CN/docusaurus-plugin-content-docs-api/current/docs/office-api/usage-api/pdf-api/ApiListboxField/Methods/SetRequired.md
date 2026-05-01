# SetRequired

设置字段为必填

继承自 [ApiBaseField.SetRequired](../../ApiBaseField/Methods/SetRequired.md)。

## 示例

在 PDF 文档中设置字段为必填。

```javascript editor-pdf
// How to set required for a base field in a PDF document?

// Set required and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```
