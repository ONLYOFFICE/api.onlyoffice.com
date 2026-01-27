# Get（获取）

通过索引返回数组值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Get` 方法。

## 语法

```py
def Get(self, str key);
```

## 参数

| 参数   | 类型 | 描述               |
| ------ | ---- | ------------------ |
| key    | int  | 数组值的索引。     |

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
charts = document.Call("GetAllCharts")
chart = charts.Get(1)
```

也可以使用 `default[]` 后缀表达式通过索引获取数组值：

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
document = api.Call("GetDocument")
charts = document.Call("GetAllCharts")
chart = charts[1]
```