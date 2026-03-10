# ReplaceByElement

用新元素替换当前内容控件。

## 语法

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 用于替换当前内容控件的元素。 |

## 返回值

boolean

## 示例

此示例用段落替换内容控件。

```javascript editor-docx
// How to replace the block content control with another document element (paragraph, table, or block content control).

// Creates the ApiBlockLvlSdt object and replaces it with the ApiParagraph object.

// Replaces the block level content control with a text.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content control was replaced with the current paragraph.");
blockLvlSdt.ReplaceByElement(paragraph);
```
