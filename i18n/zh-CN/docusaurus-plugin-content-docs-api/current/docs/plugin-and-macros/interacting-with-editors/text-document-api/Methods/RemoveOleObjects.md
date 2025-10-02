# 移除多个 OLE 对象

根据内部 ID 移除文档中的多个 OLE 对象。

## 语法

```javascript
expression.RemoveOleObjects(arrObjects);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrObjects | 必填 | [OLE 对象数据](../Enumeration/OLEObjectData.md)[] | — | 用于操作文档中添加的 OLE 对象的标识符数组。例如：[&#123;"InternalId": "5_556"&#125;]。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RemoveOleObjects", [[{"InternalId": "5_556"}]]);
```
