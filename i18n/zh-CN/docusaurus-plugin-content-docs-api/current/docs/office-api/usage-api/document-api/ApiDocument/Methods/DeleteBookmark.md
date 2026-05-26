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

从文档中的文本范围删除命名书签。

```javascript editor-docx
// How do I remove a bookmark by name after it is no longer needed in a document?

// Clean up temporary navigation markers once they have served their purpose in a document.

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
