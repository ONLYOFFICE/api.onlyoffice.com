# MoveCursorToPos

将光标移动到当前文档的指定位置。
如果文档中有任何选区，将被移除。

## 语法

```javascript
expression.MoveCursorToPos(nPos);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | 0 | 所需的光标位置。 |

## 返回值

boolean

## 示例

此示例将光标移动到范围对象内的指定位置。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
paragraph = Api.CreateParagraph();
paragraph.AddText("The cursor was moved to the end of the document");
doc.Push(paragraph);
let range = doc.GetRange();
doc.MoveCursorToPos(range.GetEndPos());

```
