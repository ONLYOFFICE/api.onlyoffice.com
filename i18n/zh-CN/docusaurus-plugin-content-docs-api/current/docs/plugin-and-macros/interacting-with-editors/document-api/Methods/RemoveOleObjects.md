# RemoveOleObjects

通过内部 ID 从文档中删除多个 OLE 对象。

## 语法

```javascript
expression.RemoveOleObjects(arrObjects);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrObjects | 必需 | [OLEObjectData](../Enumeration/OLEObjectData.md)[] |  | 用于处理添加到文档中的 OLE 对象的标识符数组。示例：[&#123;"InternalId": "5_556"&#125;]。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RemoveOleObjects", [[{"InternalId": "5_556"}]]);
```
