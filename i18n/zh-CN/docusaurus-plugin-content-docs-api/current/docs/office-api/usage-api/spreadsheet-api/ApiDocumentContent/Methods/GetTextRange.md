# GetTextRange

返回表示当前文档内容中所含部分文本的 ApiTextRange 对象。

## 语法

```javascript
expression.GetTextRange(start, end);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 起始字符位置（从 0 开始，包含该位置）。 |
| end | 可选 | number |  | 结束字符位置（从 0 开始，不包含该位置）。默认为内容末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

获取工作表上图形全部文本的文本区域，并将其设置为粗体。

```javascript editor-xlsx
// The text of a shape is addressed by character positions, so a range can cover any part of it.

// Get the range of the shape text body and apply bold to the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = docContent.GetTextRange(0, 5);
range.SetBold(true);
```
