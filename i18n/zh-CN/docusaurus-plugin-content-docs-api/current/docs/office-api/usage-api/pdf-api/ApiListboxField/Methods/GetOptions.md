# GetOptions

获取列表中的所有选项。

继承自 [ApiBaseListField.GetOptions](../../ApiBaseListField/Methods/GetOptions.md)。

## 示例

从 PDF 文档中带有选项列表的字段获取所有选项。

```javascript editor-pdf
// How can I get the options using a list field in a PDF document?

// Get the options for a list field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
let options = comboboxField.GetOptions();
console.log('Combobox options is: ' + options);
```
