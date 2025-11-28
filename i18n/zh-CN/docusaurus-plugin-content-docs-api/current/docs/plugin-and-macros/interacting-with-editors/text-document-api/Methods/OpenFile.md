# 打开文件

打开包含字段的文件。

## 语法

```javascript
expression.OpenFile(binaryFile, fields);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| binaryFile | 必填 | Uint8Array | — | 以 8 位无符号整数数组格式表示的文件。 |
| fields | 必填 | string[] | — | 字段值列表。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("OpenFile", [[Uint8Array], ["id", "name"]]);
```
