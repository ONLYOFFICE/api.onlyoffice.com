# RemoveOption

从列表选项中移除选项。

Inherited from [ApiBaseListField.RemoveOption](../../ApiBaseListField/Methods/RemoveOption.md).

## 示例

此示例从带有选项列表的字段中删除选项。

```javascript editor-pdf
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

