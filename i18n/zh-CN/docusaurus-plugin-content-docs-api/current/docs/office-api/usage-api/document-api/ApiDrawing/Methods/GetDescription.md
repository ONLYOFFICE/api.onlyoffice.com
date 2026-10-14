# GetDescription

获取当前绘图对象的描述。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取文档中绘图对象的描述。

```javascript editor-docx
// Needed when reading the alternative text of a drawing.

// Create a drawing, set its description, and read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing description: " + description);
doc.AddElement(0, paragraph);
```
