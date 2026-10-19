# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

继承自 [ApiTextPr.SetFontFamily](../../ApiTextPr/Methods/SetFontFamily.md)。

## 语法

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - 表示 [ApiRangeTextPr](../ApiRangeTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | 可选 | string \| null |  | 用于当前文本块的一个或多个字体系列。传递 *null* 或省略此参数可移除字体系列。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

更改文档中应用于文本的字体系列。

```javascript editor-docx
// How do I apply a different typeface to text in a document?

// Switch all text to a specific font by updating the default text properties in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");
```
