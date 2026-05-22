# SetPageMargins

指定此节中所有页面的页边距。

## 语法

```javascript
expression.SetPageMargins(left, top, right, bottom);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| left | 必需 | [twips](../../Enumeration/twips.md) |  | 左边距宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| top | 必需 | [twips](../../Enumeration/twips.md) |  | 上边距高度，以点的二十分之一为单位（1/1440 英寸）。 |
| right | 必需 | [twips](../../Enumeration/twips.md) |  | 右边距宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| bottom | 必需 | [twips](../../Enumeration/twips.md) |  | 下边距高度，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean

## 示例

设置文档中节内页面的上、下、左、右边距。

```javascript editor-docx
// How do I define the blank space around the edges of each page in a document?

// Adjust the border spacing on all sides of the pages within a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);
```
