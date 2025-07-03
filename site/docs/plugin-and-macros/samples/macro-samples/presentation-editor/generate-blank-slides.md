# Generate blank slides

Inserts a blank slide after every _n_ slides in the presentation, where _n_ is a configurable interval.

```ts
(function () {
  // Get the presentation object
  let presentation = Api.GetPresentation();

  // Get the total number of slides in the presentation
  let totalSlides = presentation.GetSlidesCount();

  // Define position interval for blank slides (every 3rd slide)
  let blankSlidePosition = 3;

  // Iterate through all slides
  for (let i = 0; i < totalSlides; i++) {
    // Check if the current position is a multiple of the blank slide position
    if ((i + 1) % blankSlidePosition === 0) {
      // Create a new blank slide
      let oSlide = Api.CreateSlide();

      // Add the slide to the presentation
      presentation.AddSlide(oSlide);

      // Move the slide to position after the current slide
      oSlide.MoveTo(i + 1);
    }
  }
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [MoveTo](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/MoveTo.md)

## Result

![GenerateBlankSlides](/assets/images/plugins/generate-blank-slides.png#gh-light-mode-only)
![GenerateBlankSlides](/assets/images/plugins/generate-blank-slides.dark.png#gh-dark-mode-only)
