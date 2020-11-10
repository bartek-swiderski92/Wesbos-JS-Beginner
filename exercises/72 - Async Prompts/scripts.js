function ask(options) {
    return new Promise(function (resolve) {
        // First we need to create a popup with all the fields in it 
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
            <label>${options.title}</label>
            </fieldset>
        `);

        console.log(popup);
        // Check if they want a cancel button 
        // TODOcheckfor list
        // Listen for the submit event on the inputs
        // When someone does submit it, resolve the data that was in the input box!
    });
}