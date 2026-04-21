# IsCommitOnSelChange

检查字段是否可在选择更改时提交。

继承自 [ApiBaseListField.IsCommitOnSelChange](../../ApiBaseListField/Methods/IsCommitOnSelChange.md)。

## 示例

从 PDF 文档中带有选项列表的字段获取选择更改时提交属性。

```javascript editor-pdf
// How can I is commit on sel change using a list field in a PDF document?

// Is commit on sel change for a list field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetCommitOnSelChange(true);
comboboxField.SetValue('Commit on sel change is: ' + comboboxField.IsCommitOnSelChange());
```
