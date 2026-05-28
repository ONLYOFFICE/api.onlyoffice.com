# SetSpacingBefore

设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则
nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则
将其解释为 false。

## 语法

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | 必需 | [twips](../../Enumeration/twips.md) |  | 当前段落段前间距的值，以磅的二十分之一（1/1440 英寸）为单位。 |
| isBeforeAuto | 可选 | boolean | false | true 值禁用当前段落的段前间距。 |

## 返回值

boolean

## 示例

在段落上方添加额外空间，使其与文档中前面的内容分开。

```javascript editor-docx
// How do I control the amount of space before a paragraph in a document?

// Create a visual gap above a paragraph so it stands apart from the text above it.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetSpacingBefore(1440);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
