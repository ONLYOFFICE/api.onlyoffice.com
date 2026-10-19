# GetTransparent

返回填充的透明度。

## 语法

```javascript
expression.GetTransparent();
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在文档中读取形状填充的透明度。

```javascript editor-docx
// Find out how transparent a shape's fill is in a document.

// Check the transparency that was applied to a shape's fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);

let appliedFill = shape.GetFill();
paragraph.AddText("Fill transparency: " + appliedFill.GetTransparent());
```
