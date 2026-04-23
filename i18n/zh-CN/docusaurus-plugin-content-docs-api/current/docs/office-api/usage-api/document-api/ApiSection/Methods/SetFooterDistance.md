# SetFooterDistance

指定从页面底边到页脚底边的距离。

## 语法

```javascript
expression.SetFooterDistance(nDistance);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDistance | 必需 | [twips](../../Enumeration/twips.md) |  | 从页面底边到页脚底边的距离，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean

## 示例

此示例指定从页面底边到页脚底边的距离。

```javascript editor-docx
// How to set footer distance of the section.

// Specify the distance between the page end and the footer.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (1440 twentieths of a point).");
```
