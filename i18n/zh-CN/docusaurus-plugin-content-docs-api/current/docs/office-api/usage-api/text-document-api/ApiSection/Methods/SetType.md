# SetType

指定当前节的类型。节类型定义当前节的内容
相对于上一节的放置方式。

## 语法

```javascript
expression.SetType(sType);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [SectionBreakType](../../Enumeration/SectionBreakType.md) |  | 节分隔符类型。 |

## 返回值

boolean

## 示例

此示例将节分隔符类型设置为「continuous」。

```javascript editor-docx
// How to update a section type.

// Create a section from a paragraph and make it continuous.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.CreateSection(paragraph);
paragraph.AddText("This is section #1 of the document. ");
section = doc.GetFinalSection();
section.SetType("continuous");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
paragraph.AddText("As you can see, the section is not on a new page. ");
paragraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
doc.Push(paragraph);
```
