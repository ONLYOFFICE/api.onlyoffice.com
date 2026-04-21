# Delete

删除内容控件及其内容。如果 keepContent 为 true，则不删除内容。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

删除文档中的内容控件及其内容。

```javascript editor-docx
// Create the block-level content control object in the current document, add a text to it, and delete it and its content from the document.

// How to delete the block level container from the document class.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Delete(false);
```
