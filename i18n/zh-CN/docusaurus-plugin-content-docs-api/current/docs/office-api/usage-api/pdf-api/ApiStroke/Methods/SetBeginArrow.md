# SetBeginArrow

设置笔触的起始箭头。

## 语法

```javascript
expression.SetBeginArrow(type, width, length);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineEndType](../../Enumeration/LineEndType.md) |  | 起始箭头的类型。 |
| width | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 起始箭头的宽度。 |
| length | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 起始箭头的长度。 |

## 返回值

boolean

## 示例

在 PDF 中为线条的起点添加箭头。

```javascript editor-pdf
// Set the beginning arrow of a line's stroke in a PDF.

// Create a line, retrieve its stroke, apply a triangle arrow to the start, and label the result in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 50 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
page.AddObject(line);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
page.AddObject(label);
label.GetContent().GetElement(0).AddText("Begin arrow set: " + result);
```
