# Set（设置）

通过索引设置数组的值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Set` 方法。

## 语法

```py
def Set(self, int key, CDocBuilderValue value);
```

## 参数

| 参数   | 类型                                                       | 描述                 |
| ------ | ---------------------------------------------------------- | -------------------- |
| key    | int                                                        | 数组值的索引。       |
| value  | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | 要设置的数组值。     |

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
charts = document.GetAllCharts()
chart =  api.CreateChart( "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24)
charts.Set(1, oChart)
```

`default[]` 后缀表达式也可用于通过索引设置数组值：

```py
property CDocBuilderValue default[int]
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
charts = document.GetAllCharts()
chart =  api.CreateChart( "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24)
charts[1, oChart]
```