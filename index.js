const { readInput, inquireMenu, pause } = require("./helpers/inquirer");
const Searches = require("./models/searches");


const main = async() => {
    
    let opt = 0;
    const search = new Searches();
    do{
        opt = await inquireMenu();

        switch(opt){
            case 1:
                const place = await readInput('Please type a city name\n');
                await search.byCity(place);
                // Buscar lugares
                //Seleccionar lugar
                //clima
                //Mostrar resultados
                console.log('\nCity Information: \n'.green);
                console.log('City: ',);
                console.log('Lat: ',);
                console.log('Lng: ',);
                console.log('Weather: ',);
                console.log('Min: ',);
                console.log('Max: ',);
                break;
            case 2:
                break;
        }

        if(opt !==0 ) await pause();

    }while(opt !== 0);
    console.clear();
};


main();