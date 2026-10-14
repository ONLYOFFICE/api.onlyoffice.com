# AddText

在指定位置添加文本。当前范围会扩展以包含添加的文本。

## 语法

```javascript
expression.AddText(text, position);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将要添加的文本。 |
| position | 可选 | "after" \| "before" | "after" | 将添加文本的位置（在指定范围“之前”或“之后”）。 |

## 返回值

boolean

## 示例

在工作表的形状中向文本范围添加文本。

```javascript editor-xlsx
// The range grows to include the added text.

// Append a word after the range.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello");

let range = shape.GetTextRange();

range.AddText(" World", "after");

worksheet.GetRange("A1").SetValue("AddText: " + shape.GetTextRange().GetText());
```
