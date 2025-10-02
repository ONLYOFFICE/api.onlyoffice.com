# 查找下一项

从当前位置开始查找并选择下一个文本匹配项。

## 语法

```javascript
expression.SearchNext(oProperties, isForward);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | 必填 | Object | — | 包含查找字符串的对象。 |
| oProperties.searchString | 必填 | string | — | 查找字符串。 |
| oProperties.matchCase | 选填 | boolean | true | 是否区分大小写。 |
| isForward | 选填 | boolean | true | 查找方向。 |

## 返回值

boolean（布尔值）

## 示例

```javascript
window.Asc.plugin.executeMethod ("SearchNext", [
    {
        "searchString": "text",
        "matchCase": true
    },
    true
]);
```
