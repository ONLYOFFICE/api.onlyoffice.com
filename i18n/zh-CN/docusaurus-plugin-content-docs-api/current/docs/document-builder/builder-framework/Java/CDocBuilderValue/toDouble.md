# toDouble

将 `CDocBuilderValue` 对象转换为双精度浮点数值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.toDouble` 方法。

## 语法

```java
double toDouble();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
double doubleValue = global.toDouble();
CDocBuilder.dispose();
```