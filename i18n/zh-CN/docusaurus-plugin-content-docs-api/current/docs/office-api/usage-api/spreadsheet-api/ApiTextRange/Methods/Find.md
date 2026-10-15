# Find

在此范围内查找给定文本的第一个匹配项，并将其作为新的 ApiTextRange 返回。如果未找到文本，则返回 null。

## 语法

```javascript
expression.Find(findWhat, after, matchCase, wholeWords);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | 必需 | string |  | 要搜索的文本。 |
| after | 可选 | number | 1 | 在此范围内开始搜索的位置（从 1 开始）。 |
| matchCase | 可选 | boolean | false | 区分大小写搜索。 |
| wholeWords | 可选 | boolean | false | 仅匹配整个单词。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在工作表的形状中在文本范围内查找单词。

```javascript editor-xlsx
// The result is a range that covers exactly the match.

// Paint the match red and report where it starts.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("alpha TARGET omega");

let range = shape.GetTextRange();

let found = range.Find("TARGET");
found.SetColor(Api.RGB(255, 0, 0));

worksheet.GetRange("A1").SetValue("Find: " + found.GetStartPos());
```
