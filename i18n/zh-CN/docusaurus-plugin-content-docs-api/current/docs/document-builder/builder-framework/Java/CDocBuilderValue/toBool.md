# toBool

将 `CDocBuilderValue` 对象转换为布尔值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.toBool` 方法。

## 语法

```java
boolean toBool();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolValue = global.toBool();
CDocBuilder.dispose();
```