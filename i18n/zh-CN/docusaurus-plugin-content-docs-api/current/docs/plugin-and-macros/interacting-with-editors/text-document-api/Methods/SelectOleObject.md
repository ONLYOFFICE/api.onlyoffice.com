# 选择 OLE 对象

选择指定的 OLE 对象。

## 语法

```javascript
expression.SelectOleObject(id);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必填 | string | — | 用于操作文档中添加的 OLE 对象的标识符。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SelectOleObject", ["5_665"]);
```
