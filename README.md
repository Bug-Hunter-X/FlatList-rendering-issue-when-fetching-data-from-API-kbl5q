# React Native FlatList Rendering Issue

This repository demonstrates a common issue encountered when using the FlatList component in React Native to render data fetched from an external API. The problem is that the FlatList component does not render correctly, resulting in a blank screen even when the API call is successful.

## Bug Description

The `DataFetch` component fetches data from a public API (`https://jsonplaceholder.typicode.com/todos`).  Even when the API request is successful, the FlatList fails to display the data, resulting in a blank screen.

## Solution

The solution involves ensuring that the `keyExtractor` prop of the FlatList is properly set and that data is available before attempting to render the FlatList.  The solution also handles potential errors during data fetching more robustly.