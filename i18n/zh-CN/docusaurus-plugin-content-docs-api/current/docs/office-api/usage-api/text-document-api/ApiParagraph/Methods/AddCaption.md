# AddCaption

在当前段落之后（或之前）添加题注段落。
💡 请注意，当前段落必须在文档中（不在页脚/页眉中）。
如果当前段落位于形状中，则题注将添加到父形状之后（或之前）。

## 语法

```javascript
expression.AddCaption(sAdditional, sLabel, bExludeLabel, sNumberingFormat, bBefore, nHeadingLvl, sCaptionSep);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAdditional | 必需 | string |  | 附加文本。 |
| sLabel | 可选 | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| String | "Table" | 题注标签。 |
| bExludeLabel | 可选 | boolean | false | 指定是否从题注中排除标签。 |
| sNumberingFormat | 可选 | [CaptionNumberingFormat](../../Enumeration/CaptionNumberingFormat.md) | "Arabic" | 可能的题注编号格式。 |
| bBefore | 可选 | boolean | false | 指定是在当前段落之前（true）还是之后（false）插入题注（如果位于形状中，则在形状之前/之后）。 |
| nHeadingLvl | 可选 | Number |  | 标题级别（如果要指定章节号时使用）。💡 如果要指定「标题 1」，则 nHeadingLvl === 0，以此类推。 |
| sCaptionSep | 可选 | [CaptionSep](../../Enumeration/CaptionSep.md) | "hyphen" | 题注分隔符（如果要指定章节号时使用）。 |

## 返回值

boolean

## 示例

此示例在段落之后添加题注段落。

```javascript editor-docx
// How to add caption to the paragraph.

// Add a caption to the text specifying its properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');

```
