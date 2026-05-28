# SetTemplateType

设置现有的预定义编号模板之一。

## 语法

```javascript
expression.SetTemplateType(sType, sSymbol);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "none" \| "bullet" \| "1)" \| "1." \| "I." \| "A." \| "a)" \| "a." \| "i." |  | 预定义的编号模板。 |
| sSymbol | 可选 | string | "" | 用于列表编号的符号。此参数仅在预定义的编号模板为 “bullet” 时有意义。 |

## 返回值

boolean

## 示例

在文档中为列表级别应用预定义的编号模板。

```javascript editor-docx
// How do I switch a list to use an alphabetic "A., B., C." numbering template in a document?

// Choose from built-in list styles to quickly format a numbered list without defining a custom type in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetTemplateType("A.");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of an A.-B.-C. numbered list");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of an A.-B.-C. numbered list");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the third element of an A.-B.-C. numbered list");
doc.Push(paragraph);
```
