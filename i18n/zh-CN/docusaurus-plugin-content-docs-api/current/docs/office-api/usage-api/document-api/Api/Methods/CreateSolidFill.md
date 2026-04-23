# CreateSolidFill

创建纯色填充，使用所选纯色作为对象背景应用于对象。

## 语法

```javascript
expression.CreateSolidFill(color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于元素填充的颜色。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例展示如何创建纯色填充。

```javascript editor-docx
// Creates a solid fill to apply to the shape using the selected solid color as the shape background.

// How to create the ApiFill object which represents a solid fill and apply it to the ApiShape class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
