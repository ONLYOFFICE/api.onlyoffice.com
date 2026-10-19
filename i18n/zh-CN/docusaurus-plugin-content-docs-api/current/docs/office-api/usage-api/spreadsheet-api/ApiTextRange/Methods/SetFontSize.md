# SetFontSize

设置当前文本范围中字符的字号。

## 语法

```javascript
expression.SetFontSize(fontSize);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontSize | 必需 | [hps](../../Enumeration/hps.md) \| null |  | 文本大小值，以半磅（1/144 英寸）为单位。传递 *null* 可移除字号。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在工作表的形状中更改范围的字号。

```javascript editor-xlsx
// The size is measured in half-points, so 40 means 20pt.

// Enlarge the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetFontSize(40);
```
