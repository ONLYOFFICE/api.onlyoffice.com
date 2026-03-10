# AddCaption

在当前内容控件之后（或之前）添加题注段落。
💡 请注意，当前内容控件必须在文档中（不能在页眉/页脚中）。
如果当前内容控件位于形状中，则题注将添加在父形状之后（或之前）。

## 语法

```javascript
expression.AddCaption(additionalText, label, excludeLabel, numFormat, isBefore, headingLvl, captionSep);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| additionalText | 必需 | string |  | 附加文本。 |
| label | 可选 | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| String | "Table" | 题注标签。 |
| excludeLabel | 可选 | boolean | false | 指定是否从题注中排除标签。 |
| numFormat | 可选 | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | 可能的题注编号格式。 |
| isBefore | 可选 | boolean | false | 指定是否在当前内容控件之前（true）或之后（false）插入题注（如果内容控件位于形状中，则在形状之后/之前）。 |
| headingLvl | 可选 | Number |  | 标题级别（如果要指定章节号时使用）。💡 如果要指定「标题 1」，则 nHeadingLvl === 0，以此类推。 |
| captionSep | 可选 | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | 题注分隔符（如果要指定章节号时使用）。 |

## 返回值

boolean

## 示例

此示例在当前内容控件之后（或之前）添加题注段落。

```javascript editor-docx
// Adds a figure caption after the block content control and sets the Arabic caption numbering format.

// How to add a caption for the ApiBlockLvlSdt object.

// Creates a block content control, adds a paragraph with an image to it, and adds a figure caption for the current content control.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');

```
