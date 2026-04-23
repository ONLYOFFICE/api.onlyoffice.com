# CreateStroke

创建为元素添加阴影的笔触。

## 语法

```javascript
expression.CreateStroke(width, fill, sDash);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位度量的阴影宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于创建阴影的填充类型。 |
| sDash | 可选 | [DashType](../../Enumeration/DashType.md) | "solid" | 线条虚线类型。 |

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

此示例展示如何创建笔触。

```javascript editor-docx
// Create a stroke using the specified width and fill and apply it to the shape from the first paragraph.

// How to create the ApiStroke object and use it to create the ApiShape object.

// Specifies the parameters of the shape stroke.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
