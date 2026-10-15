# CreateLinkAnnot

创建链接注释。

## 语法

```javascript
expression.CreateLinkAnnot(rect, action);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 批注矩形。 |
| action | 可选 | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) |  | 单击链接时执行的操作。 |

## 返回值

[ApiLinkAnnotation](../../ApiLinkAnnotation/ApiLinkAnnotation.md)
