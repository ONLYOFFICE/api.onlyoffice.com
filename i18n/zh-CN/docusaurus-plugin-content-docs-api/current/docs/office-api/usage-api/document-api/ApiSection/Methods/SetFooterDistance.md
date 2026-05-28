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
| nDistance | 必需 | [twips](../../Enumeration/twips.md) |  | 从页面底部边缘到页脚底部边缘的距离，以二十分之一磅（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

控制文档中页脚距离页面底部边缘的距离。

```javascript editor-docx
// How do I set the gap between the page bottom and the footer area in a document?

// Adjust the spacing that separates the footer from the lower edge of a page in a document.

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
