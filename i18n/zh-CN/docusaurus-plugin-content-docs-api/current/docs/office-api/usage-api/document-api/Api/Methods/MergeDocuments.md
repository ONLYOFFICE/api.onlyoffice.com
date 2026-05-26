# MergeDocuments

将当前文档与通过 builderJS.OpenTmpFile 打开的另一个文档合并。其内容将合并到当前文档中。

## 语法

```javascript
expression.MergeDocuments(file);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| file | 必需 | object |  | 第二个文档，由 builderJS.OpenTmpFile 返回。 |

## 返回值

此方法不返回任何数据。
