const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                // Different ways to read a property
                // link.href
                // link.getAttribute("href")
                // event.target.href
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })
        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history,pushState({ route }, null, route);
        }
    }
}

export default Router;