# SearchNext

从当前位置开始查找并选择下一个匹配的文本。

## 语法

```javascript
expression.SearchNext(oProperties, isForward);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | 必需 | Object |  | 包含搜索字符串的对象。 |
| oProperties.searchString | 必需 | string |  | 搜索字符串。 |
| oProperties.matchCase | 可选 | boolean | true | 是否区分大小写。 |
| isForward | 可选 | boolean | true | 搜索方向。 |

## 返回值

boolean

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
