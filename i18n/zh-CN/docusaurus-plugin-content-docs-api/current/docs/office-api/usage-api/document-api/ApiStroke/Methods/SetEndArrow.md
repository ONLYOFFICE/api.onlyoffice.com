# SetEndArrow

设置笔触的结束箭头。

## 语法

```javascript
expression.SetEndArrow(type, width, length);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineEndType](../../Enumeration/LineEndType.md) |  | 结束箭头的类型。 |
| width | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 结束箭头的宽度。 |
| length | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 结束箭头的长度。 |

## 返回值

boolean

## 示例

在文档中为形状边框的终点添加箭头。

```javascript editor-docx
// How do I set the ending arrow of a shape's outline in a document?

// Create a shape, retrieve its stroke, and apply a stealth arrow to the end of the border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetEndArrow("stealth", "medium", "large");
paragraph.AddText("End arrow set: " + result);
```
