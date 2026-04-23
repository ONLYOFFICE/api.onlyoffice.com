# AddText

向当前段落添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要插入到当前文档元素中的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例向段落添加一些文本。

```javascript editor-docx
// How to insert the text to the paragraph.

// Add paragraph text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");
```
