# GetCapType

返回笔触的线端类型。

## 语法

```javascript
expression.GetCapType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineCapType](../../Enumeration/LineCapType.md) \| null

## 示例

在文档中读取形状边框的线端类型。

```javascript editor-docx
// Get the cap type to find out how the stroke ends are drawn.

// Apply a round cap to a line's stroke, then read back its cap type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetCapType("round");
let capType = retrievedStroke.GetCapType();
paragraph.AddText("Cap type: " + capType);
```
