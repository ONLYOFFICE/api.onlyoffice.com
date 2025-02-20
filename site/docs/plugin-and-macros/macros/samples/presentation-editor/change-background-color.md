# Change background color

Sets blue color as the background of even indexed slides, if it is odd sets an image.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    const presentation = Api.GetPresentation(); 
    const slidesCount = presentation.GetSlidesCount();
    
    //Create background color and solid fill
    const backgroundColor = Api.CreateRGBColor(0, 150, 255);
    const colorFill = Api.CreateSolidFill(backgroundColor);

    //Create blip fill from image
    const imageUrl = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png";
    const imageFill = Api.CreateBlipFill(imageUrl, "stretch");
    
    //Iterate through each slide
    for (let i = 0; i < slidesCount; i++) {
        var slide = presentation.GetSlideByIndex(i);
        if(i % 2 == 0) {
            //Set color as background if index of slide is even
            slide.SetBackground(colorFill);
        } else {
            //Set image as background if index of slide is odd
            slide.SetBackground(imageFill);
        }
     }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateRGBColor](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateSolidFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateBlipFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateBlipFill.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [SetBackground](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

``` vb
Sub SetSlideBackground()
    Dim slide As slide
    Dim slideIndex As Integer
    Dim slidesCount As Integer
    Dim backgroundColor As Long
    Dim imageUrl As String
    Dim picture As Object
    Dim backgroundShape As Object
    
    ' Get the active presentation
    Dim presentation As presentation
    Set presentation = ActivePresentation
    
    ' Get the number of slides
    slidesCount = presentation.Slides.Count
    
    ' Set the RGB color for background (R = 0, G = 150, B = 255)
    backgroundColor = RGB(0, 150, 255)
    
    ' Set the image URL
    imageUrl = "https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png"
    
    ' Loop through each slide
    For slideIndex = 1 To slidesCount
        Set slide = presentation.Slides(slideIndex)
        
        ' Check if the slide index is even or odd
        If slideIndex Mod 2 = 0 Then
            ' Set a solid color background if the index is even
            slide.FollowMasterBackground = msoFalse
            slide.Background.Fill.BackColor.RGB = backgroundColor
        Else
            ' Set an image as the background if the index is odd
            slide.FollowMasterBackground = msoFalse
            
            ' Delete any previous background shapes if they exist
            On Error Resume Next
            slide.Shapes("background_image").Delete
            On Error GoTo 0
            
            ' Add the image to the slide
            Set picture = slide.Shapes.AddPicture(imageUrl, _
                                                   MsoTriState.msoFalse, _
                                                   MsoTriState.msoTrue, _
                                                   0, 0)
            
            ' Stretch the image to cover the entire slide
            picture.LockAspectRatio = MsoTriState.msoFalse
            picture.Width = slide.Master.Width
            picture.Height = slide.Master.Height
            picture.Top = 0
            picture.Left = 0
            picture.Name = "background_image"
        End If
    Next slideIndex
    
    MsgBox "Slide backgrounds have been updated!"
End Sub
```

## Result

![Change Background Color](/assets/images/plugins/change-background-color.png)
