# :cloud: Google photo embeded Url :cloud:
In some projects I did I faced the problem that the URL of the pictures on google drive does not work. After looking for a solution I discovered that you need to change the URL. This became very frustrating when I had to always change the URL when testing.
That's how I came up with this tool.

There are other sites that can do this, but they do not provide a script to transform your URL.

## :wrench: How to use this tool? :wrench:
### :one:Method 1 Classical Way:one:
Enter the tool's website [(here)](https://baltacmihai.github.io/tool-link-converter-pictures-cloud/) insert the URL in the first input and click on convert. To make sure it worked, the background image of the site will change in your image.

###  :two:Method 2 Embedded Function:two:
Copy the following tag and paste it into html before your js, to import the function first
```html
    <script src="https://baltacmihai.github.io/tool-link-converter-pictures-cloud/JS/convert.js"></script>
```

To use the function you must insert as a parameter the URL of the picture in the drive. The function returns the modified URL.

```javascript
    const newUrl = convert(oldUrl);
```

 > :heavy_exclamation_mark: NOTE : I do not recommend using photos from google drive, because they are harder to render (there may be a few seconds until they are rendered) and there is also the risk that the rendering will crash, so no image will be rendered:heavy_exclamation_mark:
