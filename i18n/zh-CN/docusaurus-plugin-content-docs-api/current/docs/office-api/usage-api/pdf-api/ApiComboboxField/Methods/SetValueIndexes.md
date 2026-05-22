# SetValueIndexes

设置选定值的索引。

继承自 [ApiBaseListField.SetValueIndexes](../../ApiBaseListField/Methods/SetValueIndexes.md)。

## 示例

按位置在 PDF 中的下拉列表中将项目标记为已选中。

```javascript editor-pdf
// How do I select options by index in a dropdown field in a PDF?

// Choose items from a list using their numeric positions in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
