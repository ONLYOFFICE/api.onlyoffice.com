# SetCommitOnSelChange

设置字段在选择更改时提交的属性。

继承自 [ApiBaseListField.SetCommitOnSelChange](../../ApiBaseListField/Methods/SetCommitOnSelChange.md)。

## 示例

在 PDF 文档中为带有选项列表的字段设置选择更改时提交属性。

```javascript editor-pdf
// How can I set commit on sel change using a list field in a PDF document?

// Set commit on sel change for a list field in a PDF document.

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
