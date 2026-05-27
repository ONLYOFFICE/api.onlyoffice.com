# GetOption

从列表选项获取选项。

继承自 [ApiBaseListField.GetOption](../../ApiBaseListField/Methods/GetOption.md)。

## 示例

从 PDF 中的下拉字段检索特定选项。

```javascript editor-pdf
// How do I access an individual option from a dropdown in a PDF?

// Display a selected choice from a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```
