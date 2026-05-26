# GetValueIndexes

获取选定值的索引。

继承自 [ApiBaseListField.GetValueIndexes](../../ApiBaseListField/Methods/GetValueIndexes.md)。

## 示例

检索 PDF 中下拉列表中已选项目的索引位置。

```javascript editor-pdf
// How do I find which items are selected in a dropdown field in a PDF?

// Get the numeric positions of chosen options in a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
console.log('Selected indexes is: ' + comboboxField.GetValueIndexes());
```
