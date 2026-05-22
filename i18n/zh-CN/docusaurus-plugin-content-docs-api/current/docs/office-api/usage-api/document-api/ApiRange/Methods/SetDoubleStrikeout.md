# SetDoubleStrikeout

指定当前范围的内容显示时，行上显示的每个字符都有两条水平线穿过。

## 语法

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | 必需 | boolean |  | 指定当前范围的内容是否以双删除线显示。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为文本范围绘制双删除线以标记为已删除。

```javascript editor-docx
// How do I put a double strikethrough on a section of text in a document?

// Visually cancel out words by overlaying them with two crossing lines in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);
```
