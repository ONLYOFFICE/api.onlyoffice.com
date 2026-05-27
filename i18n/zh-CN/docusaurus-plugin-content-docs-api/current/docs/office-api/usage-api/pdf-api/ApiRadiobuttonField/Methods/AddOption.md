# AddOption

向复选框组添加选项。

继承自 [ApiCheckboxField.AddOption](../../ApiCheckboxField/Methods/AddOption.md)。

## 示例

在 PDF 中向复选框字段添加可选选项。

```javascript editor-pdf
// How do I create multiple choices for a checkbox field in a PDF?

// Create an additional choice that users can select in a checkbox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
