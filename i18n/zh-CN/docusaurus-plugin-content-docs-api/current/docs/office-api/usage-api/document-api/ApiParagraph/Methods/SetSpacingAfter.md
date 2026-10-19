# SetSpacingAfter

设置当前段落的段后间距。

如果 isAfterAuto 参数的值为 true，则 nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则将其解释为 false。

继承自 [ApiParaPr.SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md)。

## 语法

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | 必需 | [twips](../../Enumeration/twips.md) |  | 当前段落段后间距的值，以磅的二十分之一（1/1440 英寸）为单位。 |
| isAfterAuto | 可选 | boolean | false | true 值禁用当前段落的段后间距。 |

## 返回值

boolean

## 示例

在文档中设置段落后的间距。

```javascript editor-docx
// How do I add extra space below a paragraph to separate it from the next one in a document?

// Control the gap that follows a paragraph to improve vertical rhythm in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetSpacingAfter(1440);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);
```
