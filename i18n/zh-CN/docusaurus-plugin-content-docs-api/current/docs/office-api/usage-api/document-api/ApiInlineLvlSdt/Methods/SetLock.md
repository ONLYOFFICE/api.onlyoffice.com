# SetLock

设置当前内联文本内容控件的锁定：
- **“unlocked”** - 内容可以编辑，容器可以删除。
- **“contentLocked”** - 内容无法编辑。
- **“sdtContentLocked”** - 内容无法编辑，容器无法删除。
- **“sdtLocked”** - 容器无法删除。

## 语法

```javascript
expression.SetLock(lockType);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lockType | 必需 | "unlocked" \| "contentLocked" \| "sdtContentLocked" \| "sdtLocked" |  | 应用于内联文本内容控件的锁定类型。 |

## 返回值

boolean

## 示例

锁定文档中内联文本内容控件的内容。

```javascript editor-docx
// How do I prevent users from editing the content of an inline content control in a document?

// Verify the active lock type on a content control by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.SetLock("sdtContentLocked");
inlineLvlSdt.AddElement(run, 0);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);
```
