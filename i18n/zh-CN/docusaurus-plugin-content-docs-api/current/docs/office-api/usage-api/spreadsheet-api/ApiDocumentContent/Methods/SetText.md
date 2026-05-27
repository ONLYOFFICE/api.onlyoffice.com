# SetText

用指定文本替换当前文档内容对象的所有内容，
保留第一个段落的格式。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要设置的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-xlsx
// How do I overwrite all the text inside a shape's content in a spreadsheet?

// Clear existing text and write a single sentence into a shape's document content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
content.GetElement(0).AddText("Original text in the shape.");
content.SetText("Updated text in the shape.");
worksheet.GetRange("A1").SetValue("Shape text: " + content.GetText());
```
