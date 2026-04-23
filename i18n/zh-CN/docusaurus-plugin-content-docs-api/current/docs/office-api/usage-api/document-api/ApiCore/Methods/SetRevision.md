# SetRevision

设置文档修订版本。

## 语法

```javascript
expression.SetRevision(sRevision);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRevision | 必需 | string |  | 文档修订版本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置当前文档的修订版本。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);

```
