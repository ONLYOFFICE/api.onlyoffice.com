# SetValueIndexes

设置选定值的索引。

继承自 [ApiBaseListField.SetValueIndexes](../../ApiBaseListField/Methods/SetValueIndexes.md)。

## 示例

在 PDF 文档中为带有选项列表的字段设置选中值的索引。

```javascript editor-pdf
// How do I set value indexes in a PDF document?

// Set value indexes using a list field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
