# AddText

向当前内容控件添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将添加到内容控件的文本。 |

## 返回值

boolean

## 示例

向文档中的内联内容控件添加文本。

```javascript editor-docx
// How do I insert text into an inline text content control in a document?

// Fill an inline content control with a plain-text string in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
