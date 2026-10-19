# SetFontFamily

为当前 TextRange 设置字体系列。

## 语法

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | 可选 | string \| null |  | 用于当前文本范围的一个或多个字体系列。传递 *null* 或省略此参数可移除字体系列。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在工作表的形状中更改范围的字体。

```javascript editor-xlsx
// The font applies to the covered fragment only.

// Set a monospaced font on the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetFontFamily("Courier New");
```
