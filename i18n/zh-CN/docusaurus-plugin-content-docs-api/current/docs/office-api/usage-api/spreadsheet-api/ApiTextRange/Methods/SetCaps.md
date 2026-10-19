# SetCaps

指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean \| null |  | 指定范围内容是否以大写形式显示。传递 *null* 可移除大写设置。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## 示例

在工作表的形状中将范围内的文本显示为大写字母。

```javascript editor-xlsx
// The formatting applies to the covered fragment only.

// Show the first word in capitals.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetCaps(true);
```
