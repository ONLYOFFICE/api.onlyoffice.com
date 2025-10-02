# 以 Html 格式粘贴

以 HTML 格式将文本粘贴到文档中。

## 语法

```javascript
expression.PasteHtml(htmlText);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| htmlText | 必填 | string |  | 指定以 *HTML* 格式粘贴到文档中的文本字符串。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("PasteHtml", ["&lt;p&gt;&lt;b&gt;Plugin methods for OLE objects&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;AddOleObject&lt;/li&gt;&lt;li&gt;EditOleObject&lt;/li&gt;&lt;/ul&gt;"]);
```
