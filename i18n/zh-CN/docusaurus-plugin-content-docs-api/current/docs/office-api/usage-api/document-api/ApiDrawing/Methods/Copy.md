# Copy

复制当前图形对象。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

复制绘图并在文档中为副本应用新的填充。

```javascript editor-docx
// How do I create a copy of a shape and give it a different fill in a document?

// Reuse an existing shape's geometry by cloning it and styling the clone independently.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
fill = Api.CreateRadialGradientFill([gs1, gs2]);
copyDrawing.Fill(fill);
paragraph.AddDrawing(copyDrawing);
```
