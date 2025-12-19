# toString

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.toString` 方法。

## 语法

```java
String toString();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
String stringValue = global.toString();
CDocBuilder.dispose();
```