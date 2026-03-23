# SetPageSize

指定当前节中所有页面的属性（大小和方向）。

## 语法

```javascript
expression.SetPageSize(nWidth, nHeight, isPortrait);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [twips](../../Enumeration/twips.md) |  | 页面宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| nHeight | 必需 | [twips](../../Enumeration/twips.md) |  | 页面高度，以点的二十分之一为单位（1/1440 英寸）。 |
| isPortrait | 可选 | boolean | false | 指定此节中所有页面的方向（如果设置为 true，则选择纵向）。 |

## 返回值

boolean

## 示例

此示例指定节中所有页面的属性（大小和方向）。

```javascript editor-docx
// How to set page size.

// Get the final section and resize its page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set. ");
paragraph.AddText("The page width is 5 inches (7200 twentieths of a point). ");
paragraph.AddText("The page height is 3 inches (4320 twentieths of a point). ");
paragraph.AddText("The font size is default (11 points).");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
```
