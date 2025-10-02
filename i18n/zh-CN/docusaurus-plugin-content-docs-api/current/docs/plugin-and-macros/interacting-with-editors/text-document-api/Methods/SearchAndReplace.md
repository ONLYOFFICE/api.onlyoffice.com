# 查找替换

查找并替换文本。

## 语法

```javascript
expression.SearchAndReplace(oProperties);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | 必填 | Object | — | 包含查找和替换字符串的对象。 |
| oProperties.searchString | 必填 | string | — | 查找字符串。 |
| oProperties.replaceString | 必填 | string | — | 替换字符串。 |
| oProperties.matchCase | 选填 | boolean | true | 是否区分大小写。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SearchAndReplace", [
    {
        "searchString": "text1",
        "replaceString": "text2",
        "matchCase": true
    }
]);
```
