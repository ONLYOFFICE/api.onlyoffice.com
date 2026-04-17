# SetValueIndexes

设置选定值的索引。

Inherited from [ApiBaseListField.SetValueIndexes](../../ApiBaseListField/Methods/SetValueIndexes.md).

## 示例

此示例为带有选项列表的字段设置选中值索引。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```

