# SetEndPos

设置当前范围的结束位置。

## 语法

```javascript
expression.SetEndPos(pos);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 必需 | number |  | 结束位置。 |

## 返回值

boolean

## 示例

在工作表的形状中移动文本范围的结束位置。

```javascript editor-xlsx
// The range keeps its start and stops at the new position.

// Cut the range down to the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let part = range.GetRange(0, 11);
part.SetEndPos(5);

worksheet.GetRange("A1").SetValue("SetEndPos: " + part.GetText());
```
