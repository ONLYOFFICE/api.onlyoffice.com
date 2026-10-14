# GetTextRange

返回表示当前超链接中所含部分文本的 ApiTextRange 对象。

## 语法

```javascript
expression.GetTextRange(start, end);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 相对于超链接的起始字符位置（从 0 开始，包含该位置）。 |
| end | 可选 | number |  | 结束字符位置（从 0 开始，不包含该位置）。默认为超链接末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

通过文本区域将工作表上图形中超链接的文本设置为斜体。

```javascript editor-xlsx
// A hyperlink keeps its own runs, and the range covers exactly the text of the link.

// Take the range of the whole hyperlink text and apply italic to it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Open ");
let hyperlink = paragraph.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");

let range = hyperlink.GetTextRange();
range.SetItalic(true);
```
