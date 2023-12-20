// const arr = [
//     {
//         brand: "Samsung",
//         model: "SamsungA30",
//         price: "40000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Samsung",
//         model: "SamsungA10",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Samsung",
//         model: "SamsungA20",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY20",
//         price: "20000",
//         camera: "40px",
//         ram: "2gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY11",
//         price: "20000",
//         camera: "40px",
//         ram: "3gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY15",
//         price: "30000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "64gb",
        
//     },
//     {
//         brand: "Motorola",
//         model: "Motorola123",
//         price: "5000",
//         camera: "2px",
//         ram: "2gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "Iphone12",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "Iphone13",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "IphoneX",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },

//         ];

//         function searchMobilePhones() {
//             const searchBy = document.getElementById('searchBy').value;
//             const searchInput = document.getElementById('searchInput').value.toLowerCase();

//             const filteredPhones = arr.filter(phone => phone[searchBy].toLowerCase().includes(searchInput));

//             displayResults(filteredPhones);
//         }

//         function displayResults(phones) {
//             const resultDiv = document.getElementById('result');
//             resultDiv.innerHTML = '';

//             if (phones.length === 0) {
//                 resultDiv.innerHTML = '<p>No matching phones found.</p>';
//                 return;
//             }

//             phones.forEach(phone => {
//                 const phoneInfo = `
//                     <p>
//                         Brand: ${phone.brand}<br>
//                         Model: ${phone.model}<br>
//                         Price: ${phone.price}<br>
//                         Camera: ${phone.camera}<br>
//                         RAM: ${phone.ram}<br>
//                         ROM: ${phone.rom}<br>
//                     </p>
//                 `;
//                 resultDiv.innerHTML += phoneInfo;
//             });
//         }



const arr = [{
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom : "128gb",
    
},
{
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom : "128gb",
    
},
{
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom : "128gb",
    
},
{
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom : "32gb",
    
},
{
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom : "32gb",
    
},
{
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom : "64gb",
    
},
{
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom : "32gb",
    
},
{
    brand: "Iphone",
    model: "Iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom : "128gb",
    
},
{
    brand: "Iphone",
    model: "Iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom : "128gb",
    
},
{
    brand: "Iphone",
    model: "IphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom : "128gb",
    
},];

function searchPhones() {
    const searchBy = document.getElementById('searchBy').value;
    const searchInput = document.getElementById('searchInput').value;

    const filteredArray = arr
        .filter(phone => phone[searchBy].toLowerCase() === searchInput.toLowerCase())
        .map(phone => `<div>
            <h2>${phone.brand} </h2>
            <p>Model: ${phone.model} </p>
            <p>Price: ${phone.price}</p>
            <p>Camera: ${phone.camera}</p>
            <p>Ram: ${phone.ram}</p>
            <p>Rom: ${phone.rom}</p>
        </div>`);

        
   const result =  document.getElementById('result');
   result.innerHTML = filteredArray.join();
}