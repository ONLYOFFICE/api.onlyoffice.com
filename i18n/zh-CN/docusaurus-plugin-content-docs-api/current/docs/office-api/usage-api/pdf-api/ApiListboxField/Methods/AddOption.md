# AddOption

向列表选项添加新选项。

Inherited from [ApiBaseListField.AddOption](../../ApiBaseListField/Methods/AddOption.md).

## 示例

此示例向带有选项列表的字段添加新选项。

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

