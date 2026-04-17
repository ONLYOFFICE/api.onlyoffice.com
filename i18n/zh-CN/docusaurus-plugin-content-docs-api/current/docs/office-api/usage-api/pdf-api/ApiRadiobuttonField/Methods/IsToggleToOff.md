# IsToggleToOff

检查字段是否可切换为关闭。

Inherited from [ApiCheckboxField.IsToggleToOff](../../ApiCheckboxField/Methods/IsToggleToOff.md).

## 示例

此示例获取复选框字段的切换为关闭属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```

