# MoveCursorToMainDocument

将光标从页眉、页脚或文档的任何其他特殊部分移回当前页面的主文档内容。

## 语法

```javascript
expression.MoveCursorToMainDocument();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将光标从页眉或页脚移回主文档内容。

```javascript editor-docx
// Leave the header/footer editing mode after adding text so the next input goes to the document body.

// Enter text into the main document again once the cursor has left the footer.

const doc = Api.GetDocument();
doc.MoveCursorToFooter();
doc.EnterText('Text in the page footer.');

doc.MoveCursorToMainDocument();
doc.EnterText('Text in the main document.');
```
