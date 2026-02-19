# createUndefined

创建一个未定义的值。此方法返回当前的[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其[createUndefined](../CDocBuilderContext/createUndefined.md)方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.createUndefined` 方法。

## 语法

```java
CDocBuilderValue createUndefined();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue undefinedValue = api.createUndefined();
CDocBuilder.dispose();
```