# MoveOption

将选项移动到列表选项中的指定位置。

继承自 [ApiBaseListField.MoveOption](../../ApiBaseListField/Methods/MoveOption.md)。

## 示例

在 PDF 中重新排序下拉字段中的选项。

```javascript editor-pdf
// How do I rearrange the order of options in a dropdown in a PDF?

// Change the position of an item in a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
