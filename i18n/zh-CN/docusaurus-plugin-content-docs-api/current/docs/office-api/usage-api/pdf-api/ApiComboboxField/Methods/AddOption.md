# AddOption

向列表选项添加新选项。

继承自 [ApiBaseListField.AddOption](../../ApiBaseListField/Methods/AddOption.md)。

## 示例

在 PDF 中向下拉列表或列表字段添加选项。

```javascript editor-pdf
// How can I add options to a dropdown list in a PDF?

// Populate a form field with multiple selectable items in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
