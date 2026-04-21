# IsToggleToOff

检查字段是否可切换为关闭。

继承自 [ApiCheckboxField.IsToggleToOff](../../ApiCheckboxField/Methods/IsToggleToOff.md)。

## 示例

获取 PDF 文档中复选框字段的切换为关闭属性。

```javascript editor-pdf
// How can I is toggle to off using a checkbox field in a PDF document?

// Is toggle to off for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
