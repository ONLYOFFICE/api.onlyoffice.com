# isNull

如果 `CDocBuilderValue` 对象为 null，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isNll` 方法。

## 语法

```java
boolean isNull();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolNull = global.isNull();
CDocBuilder.dispose();
```