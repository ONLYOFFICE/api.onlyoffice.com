# SetText

用指定文本替换段落内容。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要设置的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-docx
// How do I overwrite the existing text of a paragraph in a document?

// Replace the original text with another text string.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the original text.");
paragraph.SetText("This is the replacement text.");
```
