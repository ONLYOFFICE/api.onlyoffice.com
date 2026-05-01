# SetDoubleStrikeout

指定此段落的内容显示为每个字符都有两条水平线穿过。

## 语法

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | 必需 | boolean |  | 指定当前段落的内容显示为双删除线。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

指定在文档中此段落的内容以每个字符上显示两条水平线的方式显示。

```javascript editor-docx
// How to strike out a text with two lines in a document.

// Create a new paragraph and set double strikeout to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);
```
