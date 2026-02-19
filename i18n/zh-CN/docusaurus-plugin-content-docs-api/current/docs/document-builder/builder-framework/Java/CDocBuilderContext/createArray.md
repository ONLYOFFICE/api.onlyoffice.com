# createArray

创建一个数组值，类似于 JS 中的 `new Array(length)`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.createArray` 方法。

## 语法

```java
CDocBuilderValue createArray(int length);
```

## 参数

| 参数   | 类型 | 描述         |
| ------ | ---- | ------------ |
| length | int  | 数组的长度。 |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue arrayValue = context.createArray(2);
CDocBuilder.dispose();
```