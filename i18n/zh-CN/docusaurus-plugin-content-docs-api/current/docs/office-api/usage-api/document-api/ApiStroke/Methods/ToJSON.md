# ToJSON

将 ApiStroke 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将边框样式保存为可移植数据格式并在文档中重用。

```javascript editor-docx
// How do I export and restore a border style for reuse in a document?

// Preserve a border configuration so it can be applied again later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let json = stroke.ToJSON();
let strokeFromJSON = Api.FromJSON(json);
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, strokeFromJSON);
paragraph.AddDrawing(drawing);
```
