# Sort slides

Sorts slides alphabetically or in reverse order based on their title groups.

```ts
(function () {
  // Sorting options
  let options = {
    reverse: true, // Sort Z to A
    caseSensitive: false, // Case sensitivity
  };

  // Main sorting function
  function organizeSlidesAlphabetically(opts) {
    // Merge options
    opts = opts || options;

    // Get a presentation
    let presentation = Api.GetPresentation();

    // Check slides count
    let slideCount = presentation.GetSlidesCount();
    if (slideCount <= 1) return; // Nothing to sort

    // Collect all slides and their titles
    let slidesInfo = [];

    for (let i = 0; i < slideCount; i++) {
      let slide = presentation.GetSlideByIndex(i);
      if (!slide) continue;

      // Get slide shapes
      let shapes = slide.GetAllShapes();
      let slideTitle = "";

      // Search for text in shapes
      if (shapes && shapes.length > 0) {
        for (let j = 0; j < shapes.length; j++) {
          let shape = shapes[j];
          if (!shape) continue;

          let content = shape.GetDocContent();
          if (!content) continue;

          let paragraph = content.GetElement(0);
          if (!paragraph) continue;

          let text = paragraph.GetText();
          if (text && text.trim()) {
            // Shorter text is more likely to be a title
            if (!slideTitle || text.length < slideTitle.length) {
              slideTitle = text.trim();
            }
          }
        }
      }

      // Extract a number from title
      let number = null;
      let match = slideTitle.match(/^(\d+)[\s\.\-\)]+/);
      if (match && match[1]) {
        number = parseInt(match[1], 10);
      }

      // Prepare the title for sorting
      let sortTitle = slideTitle || "Untitled " + i;
      if (!opts.caseSensitive) {
        sortTitle = sortTitle.toLowerCase();
      }

      slidesInfo.push({
        index: i,
        slide: slide,
        title: slideTitle || "Untitled " + i,
        sortTitle: sortTitle,
        number: number,
      });
    }

    // Sort slides
    slidesInfo.sort(function (a, b) {
      // Sort by number first (if option enabled)
      if (opts.numbersFirst) {
        if (a.number !== null && b.number !== null) {
          let numCompare = a.number - b.number;
          return opts.reverse ? -numCompare : numCompare;
        } else if (a.number !== null) {
          return -1; // Numbered slides first
        } else if (b.number !== null) {
          return 1;
        }
      }

      // Then sort alphabetically
      let textCompare = a.sortTitle.localeCompare(b.sortTitle, "tr");
      return opts.reverse ? -textCompare : textCompare;
    });

    // Move slides to new positions
    let moved = 0;
    for (let k = slidesInfo.length - 1; k >= 0; k--) {
      slidesInfo[k].slide.MoveTo(k);
      moved++;
    }

    // Show results
    if (moved > 0) {
      let message = moved + " slides rearranged.";
      message += "\nSort direction: " + (opts.reverse ? "Z to A" : "A to Z");
    }
  }

  // Run the function with default options
  organizeSlidesAlphabetically();
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [MoveTo](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/MoveTo.md)

## Result

![OrganiseSlides](/assets/images/plugins/organise-slides.png#gh-light-mode-only)
![OrganiseSlides](/assets/images/plugins/organise-slides.dark.png#gh-dark-mode-only)
