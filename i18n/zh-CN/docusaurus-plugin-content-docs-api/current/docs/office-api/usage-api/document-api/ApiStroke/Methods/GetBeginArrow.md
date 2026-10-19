# GetBeginArrow

返回笔触的起始箭头属性。

## 语法

```javascript
expression.GetBeginArrow();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object \| null

## 示例

读取文档中形状边框的起始箭头。

```javascript editor-docx
// How do I find out which arrow is applied to the start of a shape's outline in a document?

// Apply a beginning arrow to a shape's stroke, then read back its type, width, and length in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();
paragraph.AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
```
