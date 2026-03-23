# SetSection

将指定的节设置到当前段落。

## 语法

```javascript
expression.SetSection(oSection);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSection | 必需 | [ApiSection](../../ApiSection/ApiSection.md) |  | 将设置到段落的节。 |

## 返回值

boolean

## 示例

此示例将指定的节设置到当前段落。

```javascript editor-docx
// How to set section to the paragraph.

// Add the section to the text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section = doc.CreateSection(paragraph);
section.SetEqualColumns(1, 720);
section.SetPageSize(12240, 15840);
section.SetPageMargins(1440, 1440, 1440, 1440);
section.SetHeaderDistance(720);
section.SetFooterDistance(576);
section.SetPageSize(7200, 4320);
paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
paragraph.AddText("This is a paragraph in a new section. The properties from the first section was applied to this one.");
doc.Push(paragraph);
paragraph.SetSection(section);
```
