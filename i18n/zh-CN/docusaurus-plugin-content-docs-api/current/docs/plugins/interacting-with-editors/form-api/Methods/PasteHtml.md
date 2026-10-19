# PasteHtml

将 HTML 格式的文本粘贴到文档中。

## 语法

```javascript
expression.PasteHtml(htmlText, options);
```

`expression` - 表示 [Api](../form-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| htmlText | 必需 | string |  | 指定要粘贴到文档中的 *HTML* 格式文本的字符串值。 |
| options | 可选 | Object |  | 其他粘贴选项。 |
| options.MergeLast | 可选 | boolean | false | 定义最后粘贴的段落是否合并到其粘贴所在的段落中，而不是作为独立段落插入。使用此选项可替换段落的一部分而不将其拆分为两段。仅适用于 Word 文档编辑器。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("PasteHtml", ["&lt;p&gt;&lt;b&gt;Plugin methods for OLE objects&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;AddOleObject&lt;/li&gt;&lt;li&gt;EditOleObject&lt;/li&gt;&lt;/ul&gt;"]);
```
