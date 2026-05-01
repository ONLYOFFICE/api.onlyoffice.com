# SetToggleToOff

设置字段的切换为关闭属性。

继承自 [ApiCheckboxField.SetToggleToOff](../../ApiCheckboxField/Methods/SetToggleToOff.md)。

## 示例

在 PDF 文档中为复选框字段设置切换为关闭属性。

```javascript editor-pdf
// How can I set toggle to off using a checkbox field in a PDF document?

// Set toggle to off for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
