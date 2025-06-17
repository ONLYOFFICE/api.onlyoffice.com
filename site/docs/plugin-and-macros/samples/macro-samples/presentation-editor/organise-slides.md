# Organise slides

Sorts slides alphabetically or in reverse order based on their title groups.

```ts
//With this macro you can sort the slides alphabetically or reverse alphabetically according to the title group.
(function() {
    // Sorting options
    let options = {
        reverse: true,         // Sort Z to A
        caseSensitive: false,  // Case sensitivity
    };

    // Main sorting function
    function organizeSlidesAlphabetically(opts) {
        // Merge options
        opts = opts || options;
        
        // Get presentation
        let presentation = Api.GetPresentation();
        
        // Check slide count
        let slideCount = presentation.GetSlidesCount();
        if (slideCount <= 1) return; // Nothing to sort
        
        // Collect all slides and their titles
        let slidesInfo = [];
        
        for (let i = 0; i < slideCount; i++) {
            let oSlide = presentation.GetSlideByIndex(i);
            if (!oSlide) continue;
            
            // Get slide shapes
            let oShapes = oSlide.GetAllShapes();
            let slideTitle = "";
            
            // Search for text in shapes
            if (oShapes && oShapes.length > 0) {
                for (let j = 0; j < oShapes.length; j++) {
                    let oShape = oShapes[j];
                    if (!oShape) continue;
                    
                    let oContent = oShape.GetDocContent();
                    if (!oContent) continue;
                    
                    let oParagraph = oContent.GetElement(0);
                    if (!oParagraph) continue;
                    
                    let text = oParagraph.GetText();
                    if (text && text.trim()) {
                        // Shorter text is more likely to be a title
                        if (!slideTitle || text.length < slideTitle.length) {
                            slideTitle = text.trim();
                        }
                    }
                }
            }
            
            // Extract number from title
            let number = null;
            let match = slideTitle.match(/^(\d+)[\s\.\-\)]+/);
            if (match && match[1]) {
                number = parseInt(match[1], 10);
            }
            
            // Prepare title for sorting
            let sortTitle = slideTitle || "Untitled " + i;
            if (!opts.caseSensitive) {
                sortTitle = sortTitle.toLowerCase();
            }
            
            slidesInfo.push({
                index: i,
                slide: oSlide,
                title: slideTitle || "Untitled " + i,
                sortTitle: sortTitle,
                number: number
            });
        }
        
        // Sort slides
        slidesInfo.sort(function(a, b) {
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
            let textCompare = a.sortTitle.localeCompare(b.sortTitle, 'tr');
            return opts.reverse ? -textCompare : textCompare;
        });
        
        // Move slides to new positions
        let moved = 0;
        //Issue: When moving slides, the process stops on more than 8 slides and when I run the macro again, the control continues and ends successfully.
        for (let k = slidesInfo.length - 1; k >= 0; k--) {
            slidesInfo[k].slide.MoveTo(k);
            moved++;
        }
        
        // Show results
        if (moved > 0) {
            let message = moved + " slides rearranged.";
            message += "\nSort direction: " + (opts.reverse ? "Z to A" : "A to Z");
            
            console.log("Sorting Complete", message);
        }
    }

    // Run function with default options
    organizeSlidesAlphabetically();
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiDocContent/Methods/GetElement.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetText.md), [MoveTo](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/MoveTo.md)

## Result

![OrganiseSlides](/assets/images/plugins/organise-slides.png#gh-light-mode-only)
![OrganiseSlides](/assets/images/plugins/organise-slides.dark.png#gh-dark-mode-only)
