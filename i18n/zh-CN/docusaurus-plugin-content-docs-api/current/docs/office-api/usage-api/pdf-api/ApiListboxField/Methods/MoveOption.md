# MoveOption

将选项移动到列表选项中的指定位置。

继承自 [ApiBaseListField.MoveOption](../../ApiBaseListField/Methods/MoveOption.md)。

## 示例

在 PDF 文档中移动带有选项列表的字段中的选项。

```javascript editor-pdf
// How can I move option using a list field in a PDF document?

// Move option for a list field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
