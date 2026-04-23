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

此示例将 ApiFill 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON object from the fill object.

// Convert the radial gradient fill to json and add it to the paragraph.

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
