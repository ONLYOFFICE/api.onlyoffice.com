# AddText

向当前段落添加文本。

## 语法

```javascript
expression.AddText(text, widths);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 要插入到当前文档元素中的文本。可以是字符串或 Unicode 码位数组。 |
| widths | 可选 | number[] |  | 字符宽度数组（以毫米为单位）。其长度应与 "text" 参数中传递的码位数组相同。指定宽度后，添加的字符将严格保持这些宽度。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

向文档中的现有段落添加文本。

```javascript editor-docx
// How do I insert a text string into a paragraph in a document?

// Place custom text inside a paragraph to build document content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");
```
