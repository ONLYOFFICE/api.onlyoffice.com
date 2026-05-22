# AddText

将指定文本追加到文档内容的末尾。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要添加的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-xlsx
// How do I add text to the last paragraph of a shape's document content in a spreadsheet?

// Add a sentence to a shape without replacing its existing text in a spreadsheet.

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
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
worksheet.GetRange("A1").SetValue("Shape text: " + content.GetText({TableCellSeparator: ""}));
```
