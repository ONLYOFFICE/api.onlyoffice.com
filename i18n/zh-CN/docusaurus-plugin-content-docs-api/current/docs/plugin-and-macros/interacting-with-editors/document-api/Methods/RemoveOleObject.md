# RemoveOleObject

通过内部 ID 从文档中删除 OLE 对象。

## 语法

```javascript
expression.RemoveOleObject(sInternalId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sInternalId | 必需 | string |  | 用于处理添加到文档中的 OLE 对象的 OLE 对象标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RemoveOleObject", ["5_556"]);
```
