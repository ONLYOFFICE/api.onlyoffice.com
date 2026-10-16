# SetCapType

设置笔触的线端类型。

## 语法

```javascript
expression.SetCapType(type);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineCapType](../../Enumeration/LineCapType.md) |  | 笔触的线端类型。 |

## 返回值

boolean

## 示例

在 PDF 中为形状边框的端点设置方形线端。

```javascript editor-pdf
// Change the cap type to control how the stroke ends are drawn.

// Create a line, retrieve its stroke, apply the square cap type, and display the result in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 50 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
page.AddObject(line);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetCapType("square");

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
page.AddObject(label);
label.GetContent().GetElement(0).AddText("Cap type set: " + result);
```
