const cathegories = document.getElementById('categories');

const cathegoriesItems = cathegories.querySelectorAll('.item');

console.log(`В списке ${cathegoriesItems.length} категории.`);

cathegoriesItems.forEach((el) => {
    
    const titleOfCathegory = el.querySelector('h2');
    console.log(`Категория: ${titleOfCathegory.textContent}`);

    const numberOfCathegories = el.querySelectorAll('ul > li')
    console.log(`Количество элементов: ${numberOfCathegories.length}`);

})