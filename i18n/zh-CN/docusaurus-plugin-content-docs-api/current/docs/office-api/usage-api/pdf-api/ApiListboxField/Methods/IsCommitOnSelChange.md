# IsCommitOnSelChange

检查字段是否可在选择更改时提交。

继承自 [ApiBaseListField.IsCommitOnSelChange](../../ApiBaseListField/Methods/IsCommitOnSelChange.md)。

## 示例

检查 PDF 中下拉字段在选择更改时是否自动提交。

```javascript editor-pdf
// How do I determine if a field triggers submission on selection change in a PDF?

// Verify the auto-commit setting for a dropdown list in a PDF.

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
