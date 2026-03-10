# SetFontSize

为当前文本范围的字符设置字体大小。

## 语法

```javascript
expression.SetFontSize(FontSize);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| FontSize | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位测量的文本大小值。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例为文本范围的字符设置字体大小。

```javascript editor-docx
// How to change the range text font size.

// Get a range, resize its font.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
```
