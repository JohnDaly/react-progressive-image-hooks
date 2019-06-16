# React Progressive Image Hooks

An implementation of a progressive loading image component + reusable hooks, for use in React applications.

## What is included

### `<ProgressiveImage />`

A React component that loads and renders an image progressively. It renders two images, a placeholder and the full image. This repository currently does not include any styling for the component. To see an example of how you can style the ProgressiveImage component to do a simple blur/fade-in transition, check out the sample app in the demo directory.

#### Props

| Name           | Type   | Required | Description |
| -------------- |:------:|:--------:|-------------------------------------------|
| placeholderSrc | string | true  | the URL for the placeholder image to display |
| src            | string | true  | the URL for the full image to display        |
| classPrefix    | string | false | the prefix for classnames of rendered elements (defaults to `prog-img`) |

#### Usage

Since both images will be rendered with this component, it is recommended that you style the images by layering them on top of eachother, with the full size image being on top. By layering the images like this, you can provide styling that will transition the full size image in when it is done loading. To see an example of how this component is used, take a look at the demo application, and take a look at the `App.css` file to see how the styling is implemented.


### `useProgressiveImage`

A custom React hook, which returns two objects -- information about the loading placeholder image, and information about the loading full image.

#### Parameters

| Name           | Type   | Required | Description |
| -------------- |:------:|:--------:|-------------------------------------------|
| placeholderSrc | string | true  | the URL for the placeholder image to display |
| fullSrc        | string | true  | the URL for the full image to display        |

#### Usage

The return value of this hook is an array with two objects in it; one for the placeholder and one for the full image. The objects have the following shape:

```typescript
{
    src: string, // The URL of the image
    isCached: boolean, // Whether or not the image was cached by the browser
}
```

While the images are loading, the value of their information objects will be `null`. Once they are loaded, you will receive the information object, at which time you can plug in the returned `src` string into an `<img/>` tag (or via `background-image` CSS property) to render the image. For additional information on how this hook is used, check out the `<ProgressiveImage />` component; it is built using this hook!

### `useAsyncImage`

A custom React hook, which returns an object with information about the loading image. This is the building block hook of this project.

#### Parameters

| Name           | Type   | Required | Description |
| -------------- |:------:|:--------:|----------------------------------|
| src            | string | true     | the URL for the image to display |

#### Usage

The return value of this hook is an object with the following shape:

```typescript
{
    src: string, // The URL of the image
    isCached: boolean, // Whether or not the image was cached by the browser
}
```

While the image is loading, this object will be `null`. Once the image is loaded, you will receive the information object, at which time you can plug in the returned `src` string into an `<img/>` tag (or via `background-image` CSS property) to render the image.

## Demo

To run the demo, run the following command in the `/demo` directory: 

>yarn start 

The demo contains a basic example of how you can use the `<ProgressiveImage />` component to load in a small placeholder image, and have it transition to the larger image, when it is loaded.

Due to browser caching and connection speeds, the progressive loading effect might not be apparent in the demo. To see it more clearly, try disabling your browser's cache, and throttle the network connection speed (you can do this in Chrome and Firefox via the Network tab in the web inspector). You can try different combinations to see what the effect will look like.