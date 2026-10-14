# SetTitle

设置当前绘图对象的标题。

继承自 [ApiDrawing.SetTitle](../../ApiDrawing/Methods/SetTitle.md)。

## 语法

```javascript
expression.SetTitle(title);
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | 必需 | string |  | 要为当前绘图对象设置的标题。 |

## 返回值

boolean

## 示例

在文档中设置绘图对象的标题。

```javascript editor-docx
// Useful for assigning the alternative text title of a drawing.

// Create a drawing and set its title.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing title: " + title);
doc.AddElement(0, paragraph);
```
