Ways to create SPA with vanilla JS

- Remove Previous Page and Inject New Page into the DOM
```
<nav>
    <a href="">Section 1<a>
    <a href="">Section 2<a>
    <a href="">Section 3<a>
</nav>

<section id="section{to render one element we need to remove the current one}"></section>
```
- Hide Previous Page and Show Current Page (Not Scalable for large apps)
```
<nav>
    <a href="">Section 1<a>
    <a href="">Section 2<a>
    <a href="">Section 3<a>
</nav>

<section id="section1" hidden></section>
<section id="section2"></section>
<section id="section3" hidden></section>

```


Single Page Application and Router
- We want to change the content of the page based on what the user select
  - Home page: meno
  - Details of one particular product
  - Order: card details and order form

- We won't have multiple html files, we will use the DOM APIS and Web Components
- We will use the History API to push new entries to the navigation history

Note: IF you are creating a SPA, configure your server properly and check the url when the whole page loads for the first time