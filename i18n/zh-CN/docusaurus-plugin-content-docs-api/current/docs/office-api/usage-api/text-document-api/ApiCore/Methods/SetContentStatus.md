# SetContentStatus

设置文档内容状态。

## 语法

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | 必需 | string |  | 文档内容状态。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何使用 ApiCore 获取当前文档的内容状态。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);

```
