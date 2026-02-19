# get

通过索引或名称返回数组值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.get` 方法。

## 语法

```java
CDocBuilderValue get(int | String index);
```

## 参数

| 参数   | 类型          | 描述                     |
| ------ | ------------- | ------------------------ |
| index  | int \| String | 数组值的索引或名称。     |

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
CDocBuilderValue chart = charts.get(1);
CDocBuilder.dispose();
```

也可以使用 `default[]` 后缀表达式通过索引获取数组值：

```java
property CDocBuilderValue default[int]
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
CDocBuilderValue chart = charts[1];
CDocBuilder.dispose();
```