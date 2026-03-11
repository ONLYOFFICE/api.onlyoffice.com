# SetColor

为当前文本范围设置文本颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例为文本范围设置文本颜色。

```javascript editor-docx
// How to color the text of the range.

// Set the text color to middle washed rose.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('ONLYOFFICE Document Builder');

const companyRange = doc.GetRange(1, 11);
companyRange.SetColor(Api.HexColor('#FF6F3D'));

const productRange = doc.GetRange(12, 30);
const themeColor = Api.ThemeColor('accent1');
productRange.SetColor(themeColor);

```
