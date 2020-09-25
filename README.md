# UFOs

## Challenge Overview
You are to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you will add table filters for the city, state, country, and shape.

## Resources
- data.js
- Software: Visual Studio Code 1.47.2

## Challenge Results
There are 5 criteria in which you are able to filter the table:
- Date
- City
- State
- Country
- Shape
To perform a search, simply type in the search boxes the desired query. Here is what the table would look like if you were to search for the circle shape.
![circle_search](/static/images/circle_search_query.png)

## Challenge Summary
One drawback of this design is that your search queries have to follow the same format as the table values. You would have to type "ca" and not "CA" for California for the state value. A recommendation for further development would be to implement a web scrape to acquire new data. Another recommendation is have the filter include all format types. An example would be upper and lower case letters.