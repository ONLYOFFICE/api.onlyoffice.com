# SetVersion

设置文档版本。

## 语法

```javascript
expression.SetVersion(sVersion);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVersion | 必需 | string |  | 文档版本。 |

## 返回值

此方法不返回任何数据。

## 示例

在文档核心属性中存储版本字符串。

```javascript editor-docx
// How do I tag a document with a version number in its metadata?

// Track release stages by embedding a version label directly in a document's properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);
```
