# AddText

在指定位置添加文本。

## 语法

```javascript
expression.AddText(text, position);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将要添加的文本。 |
| position | 可选 | "after" \| "before" | "after" | 将添加文本的位置（在指定范围"之前"或"之后"）。 |

## 返回值

boolean

## 示例

此示例在指定位置添加文本。

```javascript editor-docx
// How to add raw text to the range.

// Change content of the range by adding a text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
```
