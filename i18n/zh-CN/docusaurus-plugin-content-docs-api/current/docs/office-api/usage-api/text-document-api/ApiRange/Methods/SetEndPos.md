# SetEndPos

设置当前范围对象的结束位置。

## 语法

```javascript
expression.SetEndPos(nPos);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | Number |  | 结束位置。 |

## 返回值

boolean

## 示例

此示例设置给定范围对象的结束位置。

```javascript editor-docx
// Get the end index of the range and display it.

// Retrieve a range of the paragraph and show its last position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);
```
