# SetVerticalTextAlign

设置可以插入段落或文本运行的形状内容的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalTextAlign(sVerticalAlign);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVerticalAlign | 必需 | "top" \| "center" \| "bottom" |  | 形状内部内容的垂直对齐类型。 |

## 返回值

boolean

## 示例

此示例设置可以插入段落或文本运行的形状内容的垂直对齐方式。

```javascript editor-xlsx
// How to specify a vertical alignment of a shape content.

// Set text vertical alignment of a shape to bottom.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
shape.SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
content.Push(paragraph);
```
