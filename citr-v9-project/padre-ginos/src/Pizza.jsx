// const Pizza = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("p", {}, props.description),
//     ])
// }

const Pizza = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Pizza;

// Use of default
/**
 * Exporting as export default Pizza
 * You can import without curly braces
 * import Pizza from './path'
 * 
 * You can use named export like (do multiple export from one file)
 * export const Pizza = ...
 * 
 * you have to import using curly braces
 * import { Pizza } from './path'
 */