# GetOption

从列表选项获取选项。

继承自 [ApiBaseListField.GetOption](../../ApiBaseListField/Methods/GetOption.md)。

## 示例

从 PDF 文档中带有选项列表的字段获取选项。

```javascript editor-pdf
// How to get the option for a list field in a PDF document?

// Get the option and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```
