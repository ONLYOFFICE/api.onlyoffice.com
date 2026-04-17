# AddOption

向复选框组添加选项。

Inherited from [ApiCheckboxField.AddOption](../../ApiCheckboxField/Methods/AddOption.md).

## 示例

此示例为复选框字段组添加选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```

