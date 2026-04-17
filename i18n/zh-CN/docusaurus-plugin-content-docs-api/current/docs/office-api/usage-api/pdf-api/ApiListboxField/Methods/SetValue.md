# SetValue

设置字段值

Inherited from [ApiBaseField.SetValue](../../ApiBaseField/Methods/SetValue.md).

## 示例

此示例为文本字段设置值。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```

