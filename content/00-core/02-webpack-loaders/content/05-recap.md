# Loaders Recap

Webpack only understands and parses javascript. Through loaders it can take any file format that can in some way be translated to javascript.

- `file-loader` emits an asset and returns the URL to where the emitted asset is.
- `css-loader` transforms css into code that concatenates strings of the original css together to become one string of css.
- `style-loader` outputs a small script to take that runtime string of css and inject it into the page in a `<style>` tag.

This way webpack uses javascript as an intermediate format for any content.