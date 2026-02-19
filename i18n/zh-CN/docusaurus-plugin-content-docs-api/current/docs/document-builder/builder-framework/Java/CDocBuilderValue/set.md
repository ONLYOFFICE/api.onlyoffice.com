# set（设置）

通过索引或名称设置数组的值。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderValue.set` 方法。

## 语法

```java
void set(int | String index, Object value);
```

## 参数

| 参数   | 类型           | 描述                     |
| ------ | -------------- | ------------------------ |
| index  | int \| String  | 数组值的索引或名称。     |
| value  | Object         | 要设置的数组值。         |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
CDocBuilderValue charts = api.call("GetAllCharts");
CDocBuilderValue chart =  api.call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
charts.set(1, chart);
CDocBuilder.dispose();
```

也可以使用 `default[]` 后缀表达式通过索引设置数组值：

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
CDocBuilderValue charts = api.call("GetAllCharts");
CDocBuilderValue chart =  api.call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
charts[1, chart];
CDocBuilder.dispose();
```