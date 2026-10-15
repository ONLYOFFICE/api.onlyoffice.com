# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

## 语法

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | 可选 | string \| null |  | 用于当前文本范围的一个或多个字体系列。传递 *null* 或省略此参数可移除字体系列。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为文本范围应用特定字体。

```javascript editor-docx
// How do I change the font used for a portion of text in a document?

// Switch the appearance of selected words by assigning them a different typeface in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
let range = doc.GetRange(22, 71);
range.SetFontFamily("Consolas");
```
