# SetSpacingAfter

设置当前段落的段后间距。如果 isAfterAuto 参数的值为 true，则
nAfter 的任何值都将被忽略。如果未指定 isAfterAuto 参数，则
将其解释为 false。

## 语法

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | 必需 | [twips](../../Enumeration/twips.md) |  | 当前段落段后间距的值，以磅的二十分之一（1/1440 英寸）为单位。 |
| isAfterAuto | 可选 | boolean | false | true 值禁用当前段落的段后间距。 |

## 返回值

boolean

## 示例

在段落下方添加额外空间，使其与文档中后面的内容分开。

```javascript editor-docx
// How do I control the amount of space after a paragraph in a document?

// Push the next paragraph further down the page by increasing the gap below the current one.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetSpacingAfter(1440);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetStyle(myStyle);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);
```
