console.log('app is running')

const app = {
    "name":"kelvin onkundi ndemo",
    "title":"Look for me",
    "subtitle":"Yes its him",
    "options":[]
}

const formSubmit = (e) => {
    e.preventDefault(); //prevents page from exhibiting default loading behaviour
    const option = e.target.elements.option.value; //gets the value of the option we input

    if(option){
        app.options.push(option);
        e.target.elements.option.value = ''; //reset the input field to blank
        console.log(app.options) //this is optional
        runApp()

    }


}
const approute = document.getElementById('areba');

const removeAll = () =>{
    if(app.options.length > 0){
        app.options = [];
        runApp();
    }
};

const runApp = () => {
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0? "Here are your options":"No options"}</p>
        <button onClick={removeAll}>Remove all</button>
        <p>{app.options.length}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit= {formSubmit}>
            <input type="text" name='option'/>
            <button>Add Option</button>
        </form>
    </div>
);
ReactDOM.render(template,areba)
}




runApp()