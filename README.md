# freeCodeCamp (New) Responsive Web Design.

## Project

### - Learn Accessibility by Building a Quiz Webpage


## Important Notes

<!DOCTYPE html>
<!--lang attribute on your html element will assist screen readers in identifying the language of the page. The lang attribute with the value 'en' in the opening html tag specify that the language of the page is English-->
<html lang="en">
<!-- The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.
Metadata is data about the HTML document. Metadata is not displayed.
Metadata typically define the document title, character set, styles, scripts, and other meta information.-->

<head>
    <!-- The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.
<meta> tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings. The charset attribute specifies the character encoding of the page, and, nowadays, UTF-8 is the only encoding supported by most browsers.
-->
    <meta charset="UTF-8" />
    <!--A viewport definition tells the browser how to render the page. Including one betters visual accessibility on mobile, and improves SEO (search engine optimization).-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Another important meta element for accessibility and SEO is the description definition. The value of the content attribute is used by search engines to provide a description of your page.-->
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project">
    <link rel="stylesheet" href="styles.css" />
    <!--The title element is useful for screen readers to understand the content of a page. Furthermore, it is an important part of SEO.-->
    <title>Accessibility Quiz</title>
</head>

<body>
    <!--The header element will be used to introduce the page, as well as provide a navigation menu.
The main element will contain the core content of your page.-->
    <header>
        <img src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="fcc-primary" id="logo">
        <!-- A useful property of an SVG (scalable vector graphics) is that it contains a path attribute which allows the image to be scaled without affecting the resolution of the resultant image.-->
        <h1>HTML/CSS Quiz</h1>
        <nav>
            <ul>
                <li><a href="#">INFO</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
            </ul>
        </nav>
    </header>
    <!--The main element will contain the core content of your page.-->
    <main>

    </main>
</body>

</html>







