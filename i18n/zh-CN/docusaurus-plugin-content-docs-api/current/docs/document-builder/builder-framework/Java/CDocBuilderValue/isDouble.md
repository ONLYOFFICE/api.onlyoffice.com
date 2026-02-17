# isDouble

如果 `CDocBuilderValue` 对象是双精度浮点数值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isDouble` 方法。

## 语法

```java
boolean isDouble();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolDouble = global.isDouble();
CDocBuilder.dispose();
```