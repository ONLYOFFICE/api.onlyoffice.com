# SetSmallCaps

指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，
这些大写字母比为此文本指定的实际字体大小小两磅。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前范围的内容是否以小两磅的大写字母显示。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例指定当前文本范围中的所有小写字母字符仅格式化显示为其对应的大写字母字符，这些大写字母比为此文本指定的实际字体大小小两磅。

```javascript editor-docx
// How to make range text characters uncapitalized.

// Get a range text, update its style by making its letters uncapitalized.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 24);
range.SetSmallCaps(true);
```
