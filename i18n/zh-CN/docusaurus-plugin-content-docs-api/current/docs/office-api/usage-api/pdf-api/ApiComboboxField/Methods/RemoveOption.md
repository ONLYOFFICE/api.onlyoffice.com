# RemoveOption

从列表选项中移除选项。

继承自 [ApiBaseListField.RemoveOption](../../ApiBaseListField/Methods/RemoveOption.md)。

## 示例

从 PDF 中的下拉字段删除选项。

```javascript editor-pdf
// How do I remove an option from a list field in a PDF?

// Take out an item from a dropdown's available choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
comboboxField.RemoveOption(2);
```
