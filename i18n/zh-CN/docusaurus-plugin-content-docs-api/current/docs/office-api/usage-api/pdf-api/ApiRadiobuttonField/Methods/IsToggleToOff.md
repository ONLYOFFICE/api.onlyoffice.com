# IsToggleToOff

检查字段是否可以取消选中。

继承自 [ApiCheckboxField.IsToggleToOff](../../ApiCheckboxField/Methods/IsToggleToOff.md)。

## 示例

检查 PDF 中的复选框是否可以在单击时取消选中。

```javascript editor-pdf
// How do I find out if a checkbox uses toggle-off behavior in a PDF?

// Determine whether a checked checkbox unselects when clicked again in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
