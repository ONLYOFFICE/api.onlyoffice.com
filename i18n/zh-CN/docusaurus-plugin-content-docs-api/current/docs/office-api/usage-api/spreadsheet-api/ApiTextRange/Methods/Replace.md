# Replace

替换此范围内所有出现的指定文本。

## 语法

```javascript
expression.Replace(findWhat, replaceWith, matchCase, wholeWords);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | 必需 | string |  | 要搜索的文本。 |
| replaceWith | 必需 | string |  | 替换文本。 |
| matchCase | 可选 | boolean | false | 区分大小写搜索。 |
| wholeWords | 可选 | boolean | false | 仅匹配整个单词。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

在工作表的形状中替换文本范围内某个单词的所有匹配项。

```javascript editor-xlsx
// The replacement keeps the formatting of the text it replaces.

// Replace every occurrence of "foo" with "bar".

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("foo bar foo");

let range = shape.GetTextRange();

range.Replace("foo", "bar");

worksheet.GetRange("A1").SetValue("Replace: " + shape.GetTextRange().GetText());
```
