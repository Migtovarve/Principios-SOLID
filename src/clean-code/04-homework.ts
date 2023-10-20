(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const redFruit = ['manzana', 'cereza', 'ciruela']
        return redFruit.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red' | 'yellow' | 'purple';

    function getFruitsByColor( color: FruitColor): string[] {

        const fruitByColor = {
            'red':['manzana','fresa'],
            'yellow':['piña','banana'],
            'purple':['moras','uvas']
        }

        if (!Object.keys(fruitByColor).includes(color)) {
           throw new Error('the color must be: red, yellow, purple')
        }
        
        return fruitByColor[color];

        
        /* Mi solucion */
        // const obj:any = {
        //     'red':['manzana','fresa'],
        //     'yellow':['piña','banana'],
        //     'purple':['moras','uvas']
        // }
        
        // if (obj[color]) return obj[color]
        // else throw new Error('the color must be: red, yellow, purple')


        /* solucion inicial  */
        // if ( color === 'red' )return ['manzana','fresa']

        // if ( color === 'yellow') return ['piña','banana'];

        // if ( color === 'purple') return ['moras','uvas']

        // throw Error('the color must be: red, yellow, purple');

    }

    // Simplificar esta función
    let isFirstStepWorking  = false;
    let isSecondStepWorking = false;
    let isThirdStepWorking  = false;
    let isFourthStepWorking = false;

    function workingSteps() {
       return  isFirstStepWorking ? 'First step broken.'   :
               isSecondStepWorking ? 'Second step broken.' :
               isThirdStepWorking ? 'Third step broken.'   : 
               isFourthStepWorking ? 'Fourth step broken.' : null
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
