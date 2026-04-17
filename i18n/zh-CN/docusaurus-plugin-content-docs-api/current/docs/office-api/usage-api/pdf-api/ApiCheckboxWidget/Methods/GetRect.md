# GetRect

设置字段矩形。

Inherited from [ApiBaseWidget.GetRect](../../ApiBaseWidget/Methods/GetRect.md).

## 示例

此示例创建新字段并获取其控件的矩形。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);
```

