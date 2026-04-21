# IsRequired

检查字段是否为必填

继承自 [ApiBaseField.IsRequired](../../ApiBaseField/Methods/IsRequired.md)。

## 示例

获取并显示 PDF 文档中字段的必填属性。

```javascript editor-pdf
// How can I is required using a base field in a PDF document?

// Is required for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());
```
