# GetClassType

返回 ApiFill 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"fill"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How get a class type of ApiFill.

// Retrieve class type of a created radial gradient fill and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(914400, 0, 914400, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
let classType = fill.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
