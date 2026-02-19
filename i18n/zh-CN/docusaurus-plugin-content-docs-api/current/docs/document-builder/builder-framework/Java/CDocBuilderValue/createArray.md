# createArray

创建一个数组值。此方法返回当前的 [上下文](../CDocBuilderContext/CDocBuilderContext.md) 并调用其 [createArray](../CDocBuilderContext/createArray.md) 方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.createArray` 方法。

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
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue arrayValue = api.createArray(2);
CDocBuilder.dispose();
```