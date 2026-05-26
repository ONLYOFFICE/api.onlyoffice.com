# SetHeaderDistance

指定从页面顶边到页眉顶边的距离。

## 语法

```javascript
expression.SetHeaderDistance(nDistance);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDistance | 必需 | [twips](../../Enumeration/twips.md) |  | 从页面顶边到页眉顶边的距离，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean

## 示例

控制文档中页眉距离页面顶部边缘的距离。

```javascript editor-docx
// How do I set the gap between the page top and the header area in a document?

// Adjust the spacing that separates the header from the upper edge of a page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("Scroll up the page to see it.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
section.SetHeaderDistance(1440);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header. ");
paragraph.AddText("The distance from the page top to the header is 1 inch (1440 twentieths of a point).");
```
