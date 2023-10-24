(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor() {
        }
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public html: HtmlElement;
        public inputAttributes: InputAttributes;
        public events: InputEvents;
        constructor({id, value, placeholder}:any
        ){
            this.html = new HtmlElement(id,'input') 
            this.inputAttributes = new InputAttributes(value,placeholder)
            this.events = new InputEvents()
        }
    } 

    const nameField = new InputElement({id:'Fernando', value:'Enter first name', placeholder:'txtName'});

    console.log({ nameField });

})()