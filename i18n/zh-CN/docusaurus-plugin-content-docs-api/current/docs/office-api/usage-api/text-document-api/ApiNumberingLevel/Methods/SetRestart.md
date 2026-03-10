# SetRestart

指定一个基于 1 的索引，用于确定编号级别何时应重新开始其起始值。当在给定文档内容中使用高于（早于此级别）指定编号级别的实例时，编号级别将重新开始。默认情况下，此值为 true。

## 语法

```javascript
expression.SetRestart(isRestart);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isRestart | 必需 | boolean |  | true 值表示编号级别将重新开始为其起始值。 |

## 返回值

boolean

## 示例

此示例指定一个基于 1 的索引，用于确定编号级别何时应重新开始其起始值。

```javascript editor-docx
// How to restart the numbering.

// Reset the numbering of the bulleted text.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetRestart(false);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'a'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the second element of a child numbered list which starts with 'b'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the third element of a child numbered list which starts with 'c'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the fourth element of a child numbered list which starts with 'd'");
doc.Push(paragraph);
```
