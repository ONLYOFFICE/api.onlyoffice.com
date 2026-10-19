# MoveCursorToHeader

将光标移动到指定页面的页眉中，并将文档切换到页眉编辑模式。光标位于页眉的开头。

## 语法

```javascript
expression.MoveCursorToHeader(page);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| page | 可选 | number |  | 页码。如果未指定，则使用当前页面。 |

## 返回值

boolean

## 示例

将光标移动到当前页面的页眉中并在其中输入文本。

```javascript editor-docx
// Switch the document into the header editing mode so the following input goes to the header.

// Enter text that appears in the page header instead of the main document body.

const doc = Api.GetDocument();
doc.MoveCursorToHeader();
doc.EnterText('Text in the page header.');
```
