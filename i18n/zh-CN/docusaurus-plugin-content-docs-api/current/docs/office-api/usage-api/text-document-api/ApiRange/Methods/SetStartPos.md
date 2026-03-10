# SetStartPos

设置当前范围对象的起始位置。

## 语法

```javascript
expression.SetStartPos(nPos);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | Number |  | 起始位置。 |

## 返回值

boolean

## 示例

此示例设置给定范围对象的起始位置。

```javascript editor-docx
// How to change the starting index of the range.

// Resize the range by setting new start position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);
```
