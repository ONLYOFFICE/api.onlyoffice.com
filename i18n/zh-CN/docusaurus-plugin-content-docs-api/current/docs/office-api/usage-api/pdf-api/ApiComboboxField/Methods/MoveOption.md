# MoveOption

将选项移动到列表选项中的指定位置。

Inherited from [ApiBaseListField.MoveOption](../../ApiBaseListField/Methods/MoveOption.md).

## 示例

此示例在带有选项列表的字段中移动选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```

