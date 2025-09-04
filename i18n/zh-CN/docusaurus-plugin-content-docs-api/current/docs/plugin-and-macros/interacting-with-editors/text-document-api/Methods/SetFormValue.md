# 设置表单值

为指定的表单设置值。

## 语法

```javascript
expression.SetFormValue(internalId, value);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | 必填 | string | — | 表单的唯一内部标识符。 |
| value | 必填 | string \| boolean | — | 要设置的表单值。其类型取决于表单类型。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetFormValue", ["1_713", true]);
```
