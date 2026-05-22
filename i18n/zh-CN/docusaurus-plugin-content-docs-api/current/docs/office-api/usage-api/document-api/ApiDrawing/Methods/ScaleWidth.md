# ScaleWidth

使用指定的系数缩放图形的宽度。

## 语法

```javascript
expression.ScaleWidth(coefficient);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | 必需 | number |  | 用于缩放图形宽度的系数。 |

## 返回值

boolean

## 示例

在文档中按给定比例缩放绘图的宽度。

```javascript editor-docx
// How do I resize the width of a shape proportionally in a document?

// Create several shapes at increasing width scales to compare sizes side by side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 1; i < 4; i++ ){
	let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
	let stroke = Api.CreateStroke(0, Api.CreateNoFill());
	let drawing = Api.CreateShape("cube", 963295, 963295, fill, stroke);
	paragraph.AddDrawing(drawing);
	drawing.ScaleWidth( i );
}
```
