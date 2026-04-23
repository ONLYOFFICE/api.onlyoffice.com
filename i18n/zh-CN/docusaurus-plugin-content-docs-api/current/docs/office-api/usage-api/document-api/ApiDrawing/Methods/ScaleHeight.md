# ScaleHeight

使用指定的系数缩放图形的高度。

## 语法

```javascript
expression.ScaleHeight(coefficient);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | 必需 | number |  | 用于缩放图形高度的系数。 |

## 返回值

boolean

## 示例

此示例使用指定的系数缩放图形的高度。

```javascript editor-docx
// How to increase the height of the drawing.

// Make the cube longer.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 3; i > 0; i--) {
    let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
    let stroke = Api.CreateStroke(0, Api.CreateNoFill());
    let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
    paragraph.AddDrawing(drawing);
    drawing.ScaleHeight(i);
}
```
