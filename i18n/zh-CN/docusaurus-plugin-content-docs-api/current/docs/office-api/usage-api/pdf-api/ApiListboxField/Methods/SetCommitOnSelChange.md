# SetCommitOnSelChange

设置字段是否在选择更改后立即提交更改。

继承自 [ApiBaseListField.SetCommitOnSelChange](../../ApiBaseListField/Methods/SetCommitOnSelChange.md)。

## 示例

当 PDF 中下拉选择更改时启用自动提交。

```javascript editor-pdf
// How do I make a field auto-submit when the selection changes in a PDF?

// Configure a dropdown to trigger form submission on selection in a PDF.

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
