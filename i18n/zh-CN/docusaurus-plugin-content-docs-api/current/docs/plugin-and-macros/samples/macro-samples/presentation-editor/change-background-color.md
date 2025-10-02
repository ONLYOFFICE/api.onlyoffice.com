# 更改背景颜色

为偶数索引的幻灯片设置蓝色背景，奇数索引的幻灯片设置图片背景。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let presentation = Api.GetPresentation(); 
    let slidesCount = presentation.GetSlidesCount();
    
    // 创建背景颜色和纯色填充
    let backgroundColor = Api.CreateRGBColor(0, 150, 255);
    let colorFill = Api.CreateSolidFill(backgroundColor);

    // 从图片创建斑点填充
    let imageUrl = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png";
    let imageFill = Api.CreateBlipFill(imageUrl, "stretch");
    
    // 遍历每一张幻灯片
    for (let i = 0; i < slidesCount; i++) {
        let slide = presentation.GetSlideByIndex(i);
        if(i % 2 == 0) {
            // 如果幻灯片索引为偶数，则设置颜色为背景
            slide.SetBackground(colorFill);
        } else {
            // 如果幻灯片索引为奇数，则设置图片为背景
            slide.SetBackground(imageFill);
        }
     }
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateRGBColor](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateSolidFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateBlipFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateBlipFill.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [SetBackground](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md)

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

``` vb
Sub SetSlideBackground()
    Dim slide As Slide
    Dim slideIndex As Integer
    Dim slidesCount As Integer
    Dim backgroundColor As Long
    Dim imageUrl As String
    Dim picture As Object
    Dim backgroundShape As Object
    
    ' 获取当前幻灯片
    Dim presentation As Presentation
    Set presentation = ActivePresentation
    
    ' 获取幻灯片总数
    slidesCount = presentation.Slides.Count
    
    ' 设置背景颜色的 RGB 值 (R = 0, G = 150, B = 255)
    backgroundColor = RGB(0, 150, 255)
    
    ' 设置图片的 URL
    imageUrl = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png"
    
    ' 遍历每张幻灯片
    For slideIndex = 1 To slidesCount
        Set slide = presentation.Slides(slideIndex)
        
        ' 判断幻灯片索引是偶数还是奇数
        If slideIndex Mod 2 = 0 Then
            ' 如果是偶数，设置纯色背景
            slide.FollowMasterBackground = msoFalse
            slide.Background.Fill.BackColor.RGB = backgroundColor
        Else
            ' 如果是奇数，设置图片背景
            slide.FollowMasterBackground = msoFalse
            
            ' 若背景图片存在，则删除已有的背景图片
            On Error Resume Next
            slide.Shapes("background_image").Delete
            On Error GoTo 0
            
            ' 将图片添加到幻灯片
            Set picture = slide.Shapes.AddPicture(imageUrl, _
                                                   MsoTriState.msoFalse, _
                                                   MsoTriState.msoTrue, _
                                                   0, 0)
            
            ' 拉伸图片以覆盖整个幻灯片
            picture.LockAspectRatio = MsoTriState.msoFalse
            picture.Width = slide.Master.Width
            picture.Height = slide.Master.Height
            picture.Top = 0
            picture.Left = 0
            picture.Name = "background_image"
        End If
    Next slideIndex
    
    MsgBox "幻灯片背景已更新！"
End Sub
```

## 结果

![Change Background Color](/assets/images/plugins/change-background-color.png#gh-light-mode-only)![Change Background Color](/assets/images/plugins/change-background-color.dark.png#gh-dark-mode-only)
