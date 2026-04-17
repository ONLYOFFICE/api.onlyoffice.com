# IsCommitOnSelChange

检查字段是否可在选择更改时提交。

Inherited from [ApiBaseListField.IsCommitOnSelChange](../../ApiBaseListField/Methods/IsCommitOnSelChange.md).

## 示例

此示例从带有选项列表的字段获取选择更改时提交属性。

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

