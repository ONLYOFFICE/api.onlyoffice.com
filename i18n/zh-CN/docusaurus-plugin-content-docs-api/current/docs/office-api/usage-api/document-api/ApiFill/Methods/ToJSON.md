# ToJSON

将 ApiFill 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

将填充对象序列化为 JSON 并应用于文档中的新形状。

```javascript editor-docx
// How do I convert a fill to JSON and reuse it in a document?

// Transfer a gradient fill from one context to another by saving it as JSON and rebuilding it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let json = fill.ToJSON();
let fillFromJSON = Api.FromJSON(json);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fillFromJSON, stroke);
paragraph.AddDrawing(drawing);
```
