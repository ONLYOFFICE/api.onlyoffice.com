# Delete

从文档中移除字段。

继承自 [ApiBaseField.Delete](../../ApiBaseField/Methods/Delete.md)。

## 示例

从文档中移除字段。

```javascript editor-pdf
// How to delete for a base field in a PDF document?

// Delete and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
textField.Delete();
```
