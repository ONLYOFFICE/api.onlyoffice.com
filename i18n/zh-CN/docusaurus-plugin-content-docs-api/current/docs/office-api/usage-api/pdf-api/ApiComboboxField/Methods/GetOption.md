# GetOption

从列表选项获取选项。

Inherited from [ApiBaseListField.GetOption](../../ApiBaseListField/Methods/GetOption.md).

## 示例

此示例从带有选项列表的字段获取选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```

