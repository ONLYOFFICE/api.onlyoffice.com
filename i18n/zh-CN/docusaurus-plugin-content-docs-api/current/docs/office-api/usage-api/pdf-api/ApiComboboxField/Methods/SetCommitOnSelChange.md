# SetCommitOnSelChange

设置字段在选择更改时提交的属性。

Inherited from [ApiBaseListField.SetCommitOnSelChange](../../ApiBaseListField/Methods/SetCommitOnSelChange.md).

## 示例

此示例为带有选项列表的字段设置选择更改时提交属性。

```javascript editor-pdf
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

