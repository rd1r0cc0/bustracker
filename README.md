# Real-Time Bus Tracker from Module 9
## <a href="https://github.com/rd1r0cc0/bustracker">GitHub Repo for Real-Time Bus Tracker Exercise</a>

<img width="300" height="300" src="./images/red.png">

## Track in Real-Time Buses from the Route Between MIT and Harvard

This coding project putls data from MBTA.com in JSON format on transit buses along the route between MIT and Harvard, and it takes advantage of async functions to make asynchronous requests to other websites.

It also takes advantage of Google Maps API to generate a map of the Boston area and to add/manipulate markers on the map.  A Google Maps JavaScript API Key is required and can be obtained by signing up for an account at mapsplatform.google.com.  There potentially could be costs associated with this key, depending on the number of API calls generated.

It will track buses along a specific route between MIT and Harvard.  Buses moving in one direction along the route will have blue markers on the map and buses traveling in the opposite direction will have red markers.  It will pull data from MBTA.com every 15 seconds to update the bus markers' positions on the map.

## Roadmap of Future Improvements

- Refactor the code to use Mapbox GL JS APIs instead of Google Maps JavaScript APIs to avoid any potential costs.
- Add pop-up boxes to each marker to provide more detailed information on each bus.
- Add menu options for different cities and/or different transit bus routes.

## LICENSE

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
