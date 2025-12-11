# isInt

如果 `CDocBuilderValue` 对象是整数，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isInt` 方法。

## 语法

```java
boolean isInt();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolInt = global.isInt();
CDocBuilder.dispose();
```