# SetReadOnly

设置字段为只读

Inherited from [ApiBaseField.SetReadOnly](../../ApiBaseField/Methods/SetReadOnly.md).

## 示例

此示例设置字段为只读。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```

