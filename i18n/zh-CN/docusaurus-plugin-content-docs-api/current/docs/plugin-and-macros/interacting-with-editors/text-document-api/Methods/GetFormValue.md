# 获取表单值

返回指定表单的值。

## 语法

```javascript
expression.GetFormValue(internalId);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | ------------- | ------------ | ---------- | -------- |
| internalId | 必填 | string |  | 表单的唯一内部标识符。 |

## 返回值

null \| string \| boolean

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFormValue", ["1_713"], function (res) {
    console.log (res)
});
```
