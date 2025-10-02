# 绘图水印

一个包含水印属性的对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| align | number | 水印形状中的垂直文本对齐方式：**0** - 底部，**1** - 居中，**4** - 顶部。 |
| fill | number[] \| string | 水印填充颜色，采用 RGB 格式，或图像的 URL（支持 base64，格式如 data:image/png;...）。空数组 [] 表示水印无填充。 |
| height | number | 水印高度，单位为毫米。 |
| margins | number[] | 水印形状中文字的边距，单位为毫米。 |
| paragraphs | object[] | 当前水印中的段落数组及其属性。 |
| paragraphs.align | number | 当前段落的水平文本对齐方式：**0** - 右对齐，**1** - 左对齐，**2** - 居中，**3** - 两端对齐。 |
| paragraphs.fill | number[] | 段落高亮颜色，采用 RGB 格式。空数组 [] 表示段落无高亮。 |
| paragraphs.linespacing | number | 当前段落的行间距。 |
| paragraphs.runs | object[] | 当前段落中的文本运行（runs）数组及其属性。 |
| paragraphs.runs.bold | boolean | 指定当前文本是否为加粗。 |
| paragraphs.runs.fill | number[] | 文本高亮颜色，采用 RGB 格式。空数组 [] 表示文本无高亮。 |
| paragraphs.runs.font-family | string | 文本字体家族。 |
| paragraphs.runs.font-size | string | 文本字体大小，单位为磅（pt）。 |
| paragraphs.runs.italic | boolean | 指定当前文本是否为斜体。 |
| paragraphs.runs.strikeout | boolean | 指定当前文本是否带有删除线。 |
| paragraphs.runs.text | string | 文本内容。 |
| paragraphs.runs.underline | boolean | 指定当前文本是否带下划线。 |
| rotate | number | 水印旋转角度，单位为度。 |
| stroke | number[] | 水印描边颜色，采用 RGB 格式。空数组 [] 表示水印描边无填充。 |
| stroke-width | number | 水印描边宽度，单位为毫米。 |
| transparent | number | 水印透明度等级。 |
| type | string | [形状类型](../../../../../docs/office-api/usage-api/text-document-api/Enumeration/ShapeType.md)，指定当前水印的预设形状几何。 |
| width | number | 水印宽度，单位为毫米。 |
## 类型

Object（对象）



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
