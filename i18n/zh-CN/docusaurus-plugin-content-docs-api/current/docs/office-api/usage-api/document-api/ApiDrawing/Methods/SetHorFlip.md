# SetHorFlip

水平翻转当前绘图。

## 语法

```javascript
expression.SetHorFlip(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否水平翻转。 |

## 返回值

boolean

## 示例

在文档中将形状从左到右镜像。

```javascript editor-docx
// How do I flip a shape horizontally after adding it to a document?

// Reverse the orientation of a cube shape so it faces the opposite direction in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```
