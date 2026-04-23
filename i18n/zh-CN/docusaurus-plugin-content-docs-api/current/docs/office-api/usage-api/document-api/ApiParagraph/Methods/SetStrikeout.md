# SetStrikeout

指定此段落的内容显示为中间有一条水平线穿过。

## 语法

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | 必需 | boolean |  | 指定当前段落的内容显示为删除线。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例指定此段落的内容显示为中间有一条水平线穿过。

```javascript editor-docx
// How to cross the paragraph with onle line.

// Create a paragraph with the text struck out with a single line.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with a single line.");
paragraph.SetStrikeout(true);
```
