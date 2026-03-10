# ReplaceByElement

用新元素替换当前段落。

## 语法

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 用于替换当前段落的元素。 |

## 返回值

boolean

## 示例

此示例用块级内容控件替换段落。

```javascript editor-docx
// How to replace paragraph with another element.

// Add a block level content control instead of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
paragraph.ReplaceByElement(blockLvlSdt);
```
