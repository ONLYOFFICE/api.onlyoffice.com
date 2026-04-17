# GetValue

获取字段值

Inherited from [ApiBaseField.GetValue](../../ApiBaseField/Methods/GetValue.md).

## 示例

此示例从第一个文本字段获取值并设置到第二个文本字段。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
```

