# ToJSON

将 ApiGradientStop 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiGradientStop](../ApiGradientStop.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将文档中的渐变光圈转换为 JSON 表示。

```javascript editor-docx
// How do I serialize a gradient stop into JSON format in a document?

// Restore a gradient stop from its saved JSON data to reuse in a shape fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let json = gs1.ToJSON();
let gs1FromJSON = Api.FromJSON(json);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1FromJSON, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
paragraph.AddDrawing(drawing);
```
