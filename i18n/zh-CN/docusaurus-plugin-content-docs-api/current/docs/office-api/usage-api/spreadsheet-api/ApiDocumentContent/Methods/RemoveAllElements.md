# RemoveAllElements

从当前文档或当前文档元素中移除所有元素。
💡 当所有元素被移除时，会自动创建一个新的空段落。如果要向此段落添加内容，请使用 [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) 方法。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例从当前文档或当前文档内容中移除所有元素。

```javascript editor-xlsx
// How to clear a document.

// Delete all elements from a document.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
content.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
content.Push(paragraph);
```
