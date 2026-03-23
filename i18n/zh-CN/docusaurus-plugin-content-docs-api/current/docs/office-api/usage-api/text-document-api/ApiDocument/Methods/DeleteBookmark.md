# DeleteBookmark

从文档中移除书签（如果存在）。

## 语法

```javascript
expression.DeleteBookmark(sName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 书签名称。 |

## 返回值

boolean

## 示例

此示例从文档中删除书签。

```javascript editor-docx
// How to delete a bookmark knowing its name.

// Remove the bookmark from the range.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);
```
