# SetTransparent

设置填充的透明度。

## 语法

```javascript
expression.SetTransparent(transparent);
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | 必需 | number |  | 透明度值，范围从 0（完全不透明）到 1（完全透明）。 |

## 返回值

boolean

## 示例

在文档中使形状的填充半透明。

```javascript editor-docx
// Adjust how see-through a shape's fill is in a document.

// Fade a shape's solid fill so the content behind it shows through in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
```
