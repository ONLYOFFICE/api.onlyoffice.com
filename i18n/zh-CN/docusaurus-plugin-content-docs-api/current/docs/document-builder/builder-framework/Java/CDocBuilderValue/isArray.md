# isArray

如果 `CDocBuilderValue` 对象是数组，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isArray` 方法。

## 语法

```java
boolean isArray();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolArray = global.isArray();
CDocBuilder.dispose();
```