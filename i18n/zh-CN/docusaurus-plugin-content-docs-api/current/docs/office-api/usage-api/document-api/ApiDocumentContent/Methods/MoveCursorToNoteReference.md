# MoveCursorToNoteReference

将光标移动到主文档中此脚注/尾注的引用处。如果此文档内容不是脚注/尾注，则不执行任何操作。

## 语法

```javascript
expression.MoveCursorToNoteReference(isBefore);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBefore | 必需 | boolean |  | 指定将光标放置在注释引用之前 (*true*) 还是之后 (*false*)。 |

## 返回值

boolean
