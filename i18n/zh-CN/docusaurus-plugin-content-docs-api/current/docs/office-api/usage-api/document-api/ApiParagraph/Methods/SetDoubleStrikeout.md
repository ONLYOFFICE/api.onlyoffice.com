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

在文档中为段落的每个字符绘制双删除线。

```javascript editor-docx
// How do I cross out paragraph text with a double strikethrough line in a document?

// Mark paragraph content as deleted or irrelevant using a double strikeout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);
```
