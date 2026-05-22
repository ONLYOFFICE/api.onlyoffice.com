# SetStart

指定在给定编号级别定义中父编号级别使用的编号起始值。默认情况下，此值为 1。

## 语法

```javascript
expression.SetStart(nStart);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | 必需 | number |  | 父编号级别使用的编号起始值。 |

## 返回值

boolean

## 示例

设置文档中嵌套编号级别的起始计数值。

```javascript editor-docx
// How do I make a child list begin at a specific number instead of one in a document?

// Offset a sub-list's first item to continue numbering from a chosen value in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetStart(5);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'e'");
doc.Push(paragraph);
```
