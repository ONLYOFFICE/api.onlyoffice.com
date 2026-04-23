# AddBreak

在主文档的指定位置插入分隔符。

## 语法

```javascript
expression.AddBreak(breakType, position);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| breakType | 必需 | number |  | 分隔符类型：分页符（0）或换行符（1）。 |
| position | 必需 | string |  | 将插入分页符或换行符的位置（当前绘图的「before」或「after」）。 |

## 返回值

boolean

## 示例

此示例在主文档的指定位置插入分隔符。

```javascript editor-docx
// How to add some space from the drawing.

// Insert a drawing and text into document and add a break to them.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
drawing.AddBreak(1, "before");
```
