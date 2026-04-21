# AddOption

向复选框组添加选项。

继承自 [ApiCheckboxField.AddOption](../../ApiCheckboxField/Methods/AddOption.md)。

## 示例

在 PDF 文档中为复选框字段组添加选项。

```javascript editor-pdf
// How do I add the option in a PDF document?

// Add the option using a checkbox field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
