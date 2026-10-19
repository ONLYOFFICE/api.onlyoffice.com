# SetLanguage

指定在处理文本块内容时将用于检查拼写和语法（如果请求）的语言。

## 语法

```javascript
expression.SetLanguage(langId);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | 必需 | string \| null |  | 此参数的可能值为 RFC 4646/BCP 47 定义的语言标识符。示例："en-CA"。传递 *null* 可移除语言。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

```javascript editor-xlsx
// How do I choose the proofing language with text properties in a spreadsheet?

// Get the text properties of a run inside a shape and assign a language code so the text is checked against the matching dictionary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetLanguage("en-CA");
paragraph.SetJc("left");
run.AddText("This is a sample text.");
paragraph.AddElement(run);
```
