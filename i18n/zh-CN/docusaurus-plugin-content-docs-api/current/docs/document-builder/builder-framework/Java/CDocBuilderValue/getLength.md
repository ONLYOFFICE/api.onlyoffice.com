# getLength

如果 `CDocBuilderValue` 对象是数组，则返回其长度。否则，返回 0。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.getLength` 方法。

## 语法

```java
int getLength();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
CDocBuilderValue charts = doc.call("GetAllCharts");
int length = charts.getLength();
CDocBuilder.dispose();
```