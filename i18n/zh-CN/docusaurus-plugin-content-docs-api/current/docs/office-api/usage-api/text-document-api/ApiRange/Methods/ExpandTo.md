# ExpandTo

返回一个新范围，该范围在任意方向上超出指定范围并跨越不同的范围。当前范围未更改。

## 语法

```javascript
expression.ExpandTo(oRange);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oRange | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 将要扩展的范围。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例返回一个新范围，该范围在任意方向上超出指定范围并跨越不同的范围。

```javascript editor-docx
// How to expand the first range to the second one.

// Create a range and make it cover a different area.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 22);
let rangeSecond = doc.GetRange(49, 123);
let range = rangeFirst.ExpandTo(rangeSecond);
range.SetItalic(true);
```
