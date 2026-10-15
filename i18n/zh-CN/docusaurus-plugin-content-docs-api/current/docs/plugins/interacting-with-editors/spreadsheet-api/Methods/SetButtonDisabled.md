# SetButtonDisabled

按索引启用或禁用模态插件的页脚按钮。

## 语法

```javascript
expression.SetButtonDisabled(index, isDisabled);
```

`expression` - 表示 [Api](../spreadsheet-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | config.json 中 buttons 数组内的按钮索引（从 0 开始）。 |
| isDisabled | 必需 | boolean |  | 指定是禁用 (true) 还是启用 (false) 该按钮。 |

## 返回值

此方法不返回任何数据。
