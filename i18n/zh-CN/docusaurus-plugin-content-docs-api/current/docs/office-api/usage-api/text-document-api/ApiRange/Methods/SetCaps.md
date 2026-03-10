# SetCaps

指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean |  | 指定范围内容是否以大写显示。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例指定当前文本范围中的任何小写字符仅格式化显示为其对应的大写字母字符。

```javascript editor-docx
// How to make range text uppercase.

// Update text letters of the range by converting them to capital letters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 17);
range.SetCaps(true);
```
