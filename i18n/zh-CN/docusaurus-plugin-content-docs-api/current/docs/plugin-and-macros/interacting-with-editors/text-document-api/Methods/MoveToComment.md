# 光标移动至批注

将光标移动到指定的批注。

## 语法

```javascript
expression.MoveToComment(sId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必填 | string | — | 批注的 ID。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveToComment", ["1_631"]);
```
