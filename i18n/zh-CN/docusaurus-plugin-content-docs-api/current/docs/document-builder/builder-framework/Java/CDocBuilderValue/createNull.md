# createNull

创建一个空值。此方法返回当前的 [上下文](../CDocBuilderContext/CDocBuilderContext.md) 并调用其 [createNull](../CDocBuilderContext/createNull.md) 方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.createNull` 方法。

## 语法

```java
CDocBuilderValue createNull();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue nullValue = api.createNull();
CDocBuilder.dispose();
```