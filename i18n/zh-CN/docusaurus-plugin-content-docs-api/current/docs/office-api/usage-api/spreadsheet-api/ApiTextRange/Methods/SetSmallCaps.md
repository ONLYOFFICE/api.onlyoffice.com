# SetSmallCaps

指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，这些大写字母比为此文本指定的实际字体大小小两磅。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean \| null |  | 指定当前范围的内容是否以小两磅的大写字母形式显示。传递 *null* 可移除小型大写字母。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

在工作表的形状中将范围内的文本显示为小型大写字母。

```javascript editor-xlsx
// The formatting applies to the covered fragment only.

// Show the first word in small capitals.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetSmallCaps(true);
```
