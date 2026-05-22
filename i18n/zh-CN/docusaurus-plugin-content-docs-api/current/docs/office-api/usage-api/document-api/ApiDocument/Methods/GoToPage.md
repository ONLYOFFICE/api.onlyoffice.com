# GoToPage

将光标移动到文档中指定页面的开头。

## 语法

```javascript
expression.GoToPage(index);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 页面索引。 |

## 返回值

boolean

## 示例

将光标移动到文档中的特定页面。

```javascript editor-docx
// How do I navigate to a particular page number in a document?

// Jump the editing position to a target page so that typed text lands on that page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first page.");
let oPage2 = Api.CreateParagraph();
oPage2.AddText("This is the second page.");
oPage2.GetParaPr().SetPageBreakBefore(true);
doc.Push(oPage2);
let oPage3 = Api.CreateParagraph();
oPage3.AddText("This is the third page.");
oPage3.GetParaPr().SetPageBreakBefore(true);
doc.Push(oPage3);
doc.GoToPage(1);
doc.EnterText("The cursor was moved to page 2.");
```
