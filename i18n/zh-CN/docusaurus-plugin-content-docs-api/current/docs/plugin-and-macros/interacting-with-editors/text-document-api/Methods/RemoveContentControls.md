# 移除多个内容控件

移除多个内容控件。

## 语法

```javascript
expression.RemoveContentControls(arrDocuments);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrDocuments | 必填 | [内容控件](../Enumeration/ContentControl.md)[] | — | 内容控件内部 ID 数组。例如：[&#123;"InternalId": "5_556"&#125;]。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RemoveContentControls", [[{"InternalId": "5_556"}]]);
```
