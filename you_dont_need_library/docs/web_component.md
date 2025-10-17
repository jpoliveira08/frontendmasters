Web Component
A modular, reusable building block for web development that encapsulates a set of related functionality and user interface elements.

- Compatible with every browser
- It's actually a set of standards:
  - Custom Elements
  - HTMl Templates
  - Shadow DOM
  - Declarative Shadow DOM

- There's no single way to create a web component, we have freedom of choice on how to define them and use them

Defining a custom element:
```
class MyElement extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define("my-element", MyElement);
```

Using the custom element:
```
<body>
    <my-element></my-element>
</body>
or
<script>document.createElement("my-element");</script>
```
INFO: The HTML tag we define must contain a hyphen (-) to assure future compatibility

Custom Elements Lifecycle
```
class MyElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {}; // The element is added to the document
    disconnectedCAllback() {}; // The element is removed from the document
    adoptedCallback() {}, // The element has been moved to a new document

    attributeChangedCallback(name, oldValue, new Value()) {}
}

customElements.define("my-element", MyElement);
```

Custom Elements with Slots
The slot is the content that we can define as the component's children.
```
class MyElement extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("my-element", MyElement);
```
```
<body>
    <my-element>
        <div>
            <h2>Slot of My Element</h2>
        </div>
    </my-element>
</body>
```