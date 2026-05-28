# SetSelection

设置页面选择。

## 语法

```javascript
expression.SetSelection(startPoint, endPoint);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 选区的起始点。 |
| endPoint | 必需 | [Point](../../Enumeration/Point.md) |  | 选区的结束点。 |

## 返回值

boolean

## 示例

在 PDF 的页面上将特定文本区域标记为已选中。

```javascript editor-pdf
// How do I highlight a range of text on a page in a PDF?

// Define and activate a text selection within given coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');
```
