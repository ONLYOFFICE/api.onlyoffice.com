# isBool

如果 `CDocBuilderValue` 对象是布尔值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isBool` 方法。

## 语法

```java
boolean isBool();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolBool = global.isBool();
CDocBuilder.dispose();
```