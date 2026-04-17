# SetFullName

如果可能，设置新的字段名称。

Inherited from [ApiBaseField.SetFullName](../../ApiBaseField/Methods/SetFullName.md).

## 示例

此示例设置字段全名并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```

