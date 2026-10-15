# InsertContent

将元素数组插入到文档的当前位置。数组可以包含多种元素类型的组合：
- \{@link DocumentElement\} 元素按原样插入。
- \{@link ParagraphContent\} 元素会自动分组到段落中：连续的段落级元素   共用一个新段落。
- 纯字符串和数字会包装到新的文本块中并添加到当前段落（分组规则与 \{@link ParagraphContent\} 相同）。
- \{@link ApiDrawing\} 元素会包装到新的文本块中并添加到当前段落。已在文档中使用的元素将被跳过。

## 语法

```javascript
expression.InsertContent(content, isInline, pr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| content | 必需 | ([DocumentElement](../../Enumeration/DocumentElement.md) \| [ParagraphContent](../../Enumeration/ParagraphContent.md) \| [ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| string \| number)[] |  | 要插入的元素数组。 |
| isInline | 可选 | boolean | false | 是否行内插入（仅对第一个和最后一个元素有效，且仅当它是段落时）。 |
| pr | 可选 | object |  | 插入选项。 |
| pr.KeepTextOnly | 可选 | boolean | false | 指定为插入的元素保留文本和段落的文档属性。 |
| pr.OverwriteTableCells | 可选 | boolean | false | 指定如果将单个表格插入到表格单元格中，它将从当前单元格开始覆盖现有单元格的内容，而不是作为嵌套表格插入。 |

## 返回值

boolean

## 示例

在单次调用中将段落、纯字符串和内联文本段作为混合内容插入。

```javascript editor-docx
// Consecutive inline items are automatically grouped into one new paragraph.

// All element types — block-level, string literals, and runs — are accepted in the same array.

let doc = Api.GetDocument();
let para = Api.CreateParagraph();
para.AddText("Block paragraph");
let run = Api.CreateRun();
run.AddText(" and a run");
doc.InsertContent([para, "Plain string", run]);
```
