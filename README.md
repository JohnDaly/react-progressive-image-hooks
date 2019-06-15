# React Progressive Image Hooks

An implementation of a progressive loading image component + reusable hooks, for use in React applications.

## What is included

`<ProgressiveImage />`

A React component that loads and renders an image progressively. It renders two images, a placeholder and the full image. This repository currently does not include any styling for the component. To see an example of how you can style the ProgressiveImage component to do a simple blur/fade-in transition, check out the sample app in the demo directory.

`useProgressiveImage`

A custom React hook, which returns two objects -- information about the loading placeholder image, and information about the loading full image.

`useAsyncImage`

A custom React hook, which returns an object with information about the loading image. This is the building block hook of this project.

## Demo

To run the demo, run the following command in the `/demo` directory: `yarn start`. The demo contains a basic example of how you can use the `<ProgressiveImage />` component to load in a small placeholder image, and have it transition to the larger image, when it is loaded.

Due to browser caching and connection speeds, the progressive loading effect might not be apparent in the demo. To see it more clearly, try disabling your browser's cache, and throttle the network connection speed (you can do this in Chrome and Firefox via the Network tab in the web inspector). You can try different combinations to see what the effect will look like.