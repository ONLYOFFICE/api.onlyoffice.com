# watermark_on_draw

包含水印属性的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| align | number | 水印形状中的垂直文本对齐方式：**0** - 底部，**1** - 居中，**4** - 顶部。 |
| fill | number[] \| string | RGB 格式的水印填充颜色，或图像的 URL（支持 base64：data:image/png;...）。空数组 [] 表示水印没有填充。 |
| height | number | 水印的高度，以毫米为单位。 |
| margins | number[] | 水印形状中的文本边距，以毫米为单位。 |
| paragraphs | object[] | 包含当前水印中段落及其属性的数组。 |
| paragraphs.align | number | 当前段落中的水平文本对齐方式：**0** - 右对齐，**1** - 左对齐，**2** - 居中，**3** - 两端对齐。 |
| paragraphs.fill | number[] | RGB 格式的段落高亮。空数组 [] 表示段落没有高亮。 |
| paragraphs.linespacing | number | 当前段落中的文本行间距。 |
| paragraphs.runs | object[] | 包含当前段落中的文本运行及其属性的数组。 |
| paragraphs.runs.bold | boolean | 定义当前文本是否显示为粗体。 |
| paragraphs.runs.fill | number[] | RGB 格式的文本高亮。空数组 [] 表示文本没有高亮。 |
| paragraphs.runs.font-family | string | 文本字体系列。 |
| paragraphs.runs.font-size | string | 文本字体大小，以磅（pt）为单位。 |
| paragraphs.runs.italic | boolean | 定义当前文本是否显示为斜体。 |
| paragraphs.runs.strikeout | boolean | 定义当前文本是否显示为删除线。 |
| paragraphs.runs.text | string | 运行文本。 |
| paragraphs.runs.underline | boolean | 定义当前文本是否显示为下划线。 |
| rotate | number | 水印的旋转角度，以度为单位。 |
| stroke | number[] | RGB 格式的水印描边颜色。空数组 [] 表示水印描边没有填充。 |
| stroke-width | number | 水印描边的宽度，以毫米为单位。 |
| transparent | number | 水印的透明度。 |
| type | string | 指定当前水印的预设形状几何图形的[形状](../../../../../docs/office-api/usage-api/text-document-api/Enumeration/ShapeType.md)。 |
| width | number | 水印的宽度，以毫米为单位。 |
## 类型

Object



## 示例

```javascript
var initSettings = {
    "copyoutenabled" : false,
    "hideContentControlTrack" : false,
    "watermark_on_draw" : JSON.stringify({
        "transparent" : 0.3,
        "type" : "rect",
        "width" : 100,
        "height" : 100,
        "rotate" : -45,
        "margins" : [ 10, 10, 10, 10 ],
        "fill" : [255, 0, 0],
        "stroke-width" : 1,
        "stroke" : [0, 0, 255],
        "align" : 1,

        "paragraphs" : [ {
            "align" : 2,
            "fill" : [255, 0, 0],
            "linespacing" : 1,

            "runs" : [
                        {
                            "text" : "Do not steal, %user_name%!",
                            "fill" : [0, 0, 0],
                            "font-family" : "Arial",
                            "font-size" : 40,
                            "bold" : true,
                            "italic" : false,
                            "strikeout" : false,
                            "underline" : false
                        },
                        {
                            "text" : "<%br%>"
                        }
                    ]
            }
        ]
    }),
    "disableAutostartMacros" : true,
    "fillForms" : JSON.stringify({
        "tags" : {
            "111" : {
                "text" : "Text in form with tag 111",
                "checkBox" : "true",
                "picture" : "https://upload.wikimedia.org/wikipedia/commons/9/91/ONLYOFFICE_logo.png",
                "comboBox" : "item1"
            },
            "222" : {
                "text" : "Text in form with tag 222",
                "checkBox" : "false",
                "comboBox" : "item2"
            },
            "333" : {
                "text" : "OnlyOffice"
            }
        }
    })
};
window.Asc.plugin.executeMethod("SetProperties", [initSettings]);
```
