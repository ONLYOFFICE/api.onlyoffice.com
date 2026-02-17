# isString

如果 `CDocBuilderValue` 对象是字符串，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isString` 方法。

## 语法

```java
boolean isString();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolString = global.isString();
CDocBuilder.dispose();
```