# SetToggleToOff

设置选中状态是否可以取消。

继承自 [ApiCheckboxField.SetToggleToOff](../../ApiCheckboxField/Methods/SetToggleToOff.md)。

## 示例

启用或禁用 PDF 中复选框的取消切换行为。

```javascript editor-pdf
// How do I make a checkbox uncheck when clicked if already checked in a PDF?

// Control whether a checked checkbox deselects on a second click in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```
