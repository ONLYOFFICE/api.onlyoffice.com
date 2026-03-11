# SearchAndReplace

查找并替换文本。

## 语法

```javascript
expression.SearchAndReplace(oProperties);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | 必需 | Object |  | 包含搜索和替换字符串的对象。 |
| oProperties.searchString | 必需 | string |  | 搜索字符串。 |
| oProperties.replaceString | 必需 | string |  | 替换字符串。 |
| oProperties.matchCase | 可选 | boolean | true | 是否区分大小写。 |

## 返回值

此方法不返回任何数据。

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
