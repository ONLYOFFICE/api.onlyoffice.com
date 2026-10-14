# SetText

用给定字符串替换所有文本内容。使用 "\r" 分隔段落。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 新的文本值。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

在工作表的形状中替换文本范围所包含的文本。

```javascript editor-xlsx
// The new text takes the formatting of the text it replaces.

// Replace the second word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(6, 11).SetText("Everyone");

worksheet.GetRange("A1").SetValue("SetText: " + shape.GetTextRange().GetText());
```
