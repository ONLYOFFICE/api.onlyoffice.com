# GetTextRange

返回表示当前段落中所含部分文本的 ApiTextRange 对象。调用此方法前，段落必须已附加到文档中。

## 语法

```javascript
expression.GetTextRange(start, end);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 相对于段落的起始字符位置（从 0 开始，包含该位置）。 |
| end | 可选 | number |  | 结束字符位置（从 0 开始，不包含该位置）。默认为段落末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

通过文本区域为工作表上图形段落的一部分添加下划线。

```javascript editor-xlsx
// Positions are counted from the beginning of the paragraph, the end position is excluded.

// Take the range of the first five characters of the paragraph and underline it.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = paragraph.GetTextRange(0, 5);
range.SetUnderline(true);
```
