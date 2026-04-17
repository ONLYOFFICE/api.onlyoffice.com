# GetFullName

获取字段完整名称。

Inherited from [ApiBaseField.GetFullName](../../ApiBaseField/Methods/GetFullName.md).

## 示例

此示例获取字段全名并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Field full name is: ' + textField.GetFullName());
```

