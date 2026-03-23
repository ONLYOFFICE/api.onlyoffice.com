# SetReadingOrder

指定当前段落的阅读顺序。
可能的值有：
-**null** - 使用标准方向参数；
-**"ltr"** - 从左到右的文本方向；
-**"rtl"** - 从右到左的文本方向。

## 语法

```javascript
expression.SetReadingOrder(readingOrder);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| readingOrder | 可选 | [ReadingOrder](../../Enumeration/ReadingOrder.md) |  | 阅读顺序。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例展示如何设置指定段落中文本的阅读顺序。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');

```
