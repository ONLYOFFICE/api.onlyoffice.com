# SetPlaceholderText

设置当前内容控件的占位符文本。

## 语法

```javascript
expression.SetPlaceholderText(text);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 将设置到当前内容控件的文本。 |

## 返回值

boolean

## 示例

为文档中的内容控件设置占位符文本。

```javascript editor-docx
// Create a block content control and set the placeholder text to it in a document.

// How to add the placeholder text to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");
```
