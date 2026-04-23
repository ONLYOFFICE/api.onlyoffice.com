# RemoveElement

使用指定的位置移除元素。

## 语法

```javascript
expression.RemoveElement(nPos);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 元素在文档中或其他元素内部的编号（位置）。 |

## 返回值

boolean

## 示例

此示例使用指定的位置移除元素。

```javascript editor-xlsx
// How to remove an element from a document knowing its position in the document content.

// Delete an element from a document and prove it by showing the difference.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is paragraph #1.");
for (let paraIncrease = 1; paraIncrease < 5; ++paraIncrease) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText("This is paragraph #" + (paraIncrease + 1) + ".");
    content.Push(paragraph);
}
content.RemoveElement(2);
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
content.Push(paragraph);
```
