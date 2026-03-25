# GetFormValue

返回指定表单的值。

## 语法

```javascript
expression.GetFormValue(internalId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| internalId | 必需 | string |  | 表单的唯一内部标识符。 |

## 返回值

null \| string \| boolean

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFormValue", ["1_713"], function (res) {
    console.log (res)
});
```
