# SetLock

设置当前块级文本内容控件的锁定：
-**「unlocked」** - 内容可编辑且容器可删除。
-**「contentLocked」** - 内容不可编辑。
-**「sdtContentLocked」** - 内容不可编辑且容器不可删除。
-**「sdtLocked」** - 容器不可删除。

## 语法

```javascript
expression.SetLock(lockType);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lockType | 必需 | "unlocked" \| "contentLocked" \| "sdtContentLocked" \| "sdtLocked" |  | 应用于块级文本内容控件的锁定类型。 |

## 返回值

boolean

## 示例

此示例设置块级文本内容控件的锁定。

```javascript editor-docx
// Creates a block content control and sets its lock to "sdtContentLocked", which means that the content cannot be edited and the container cannot be deleted.

// How to set the lock to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
let lock = blockLvlSdt.GetLock();
let paragraph = doc.GetElement(1);
paragraph.AddText("Lock type: " + lock);
```
