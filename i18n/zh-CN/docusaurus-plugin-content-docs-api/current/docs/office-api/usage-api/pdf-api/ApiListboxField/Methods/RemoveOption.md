# RemoveOption

从列表选项中移除选项。

继承自 [ApiBaseListField.RemoveOption](../../ApiBaseListField/Methods/RemoveOption.md)。

## 示例

从 PDF 文档中带有选项列表的字段移除选项。

```javascript editor-pdf
// How can I remove the option using a list field in a PDF document?

// Remove the option for a list field in a PDF document.

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
