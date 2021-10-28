// типы запросов
// let API = 'http://localhost:8000/products'
//GET
//с помощью fetch
// function getData(){
//     fetch(API)
//     .then((response) => {
//         if(response.ok){
//             return response.json()
//         }else{
//             console.log(response.statusText);

//         }
//         response.json()})
//     .then((data)=> {
//         console.log(data);
//     })
// }

// getData()

// с помощью axios

// async function getDataAxios(){

//     try{
//         const {data} = await axios(API) //data деструктиризация
        
//         console.log(data);

//     }catch(error){
//         console.log(error.response);
//         const status = error.statusText
//         if(status ==404){
//             console.log('Link wrong');
//         }else if(status === 500){
//             console.log('serwer low');
//         }else if(status == 403){
//             console.log('autorisation');
//         }
//     }
// }
// getDataAxios()


// const num = 10
// try{

//     num = 20
// }catch(error){
//     console.log(error);
// }


//POST отправка данных на сервер

// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// const addProduct = () =>{
//     let value = input.value
//     let product = {
//         title: value,
//     };
//     fetch(API, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(product)
//     })
// }

// btn.addEventListener('click', addProduct)


//с помощью axios
// const addProduct = async()=>{
//     let value = input.value
//     let product = {
//         title: value
//     }
//     const res = await axios.post(API, product)
//     console.log(res);
// }
// btn.addEventListener('click', addProduct)


//PUT заменяет весь объект на переданный объект
// PATCH заменяет только те поля, которые передали, не трогая остальные

// function updateProduct(){
//     let editedProduct = {
//         title: "Macbook M1 PRO"
//     }
//     fetch(`${API}/1`, {
//         method: 'PATCH',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(editedProduct),
//     })

// }
// updateProduct()

// function updateProduct(){
//         let editedProduct = {
//             title: "Macbook M1 PRO"
//         }
//         // fetch(`${API}/1`, {
//         //     method: 'PATCH',
//         //     headers: {
//         //     'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(editedProduct),
//         // })
    
//         axios.patch(`${API}/2`, editedProduct)
//     }
//     updateProduct()



const inp = $('.inp-search')
const btn = $('.btn-search')
const mainBox = $('.main-box')
const box = $('.box')
btn.on('click', ()=>{
    let val = inp.val()
    fetch(`https://goweather.herokuapp.com/weather/${val}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const today = new Date()
        mainBox.append(`
        <div class="card">
        <div class="card__inner">
            <img width="100px" src="http://download.spinetix.com/content/widgets/icons/weather/02d.png" alt="">
            <div class="card__city">${val}</div>
            <h2 class="card__temp">${data.temperature}</h2>
            <div class="card__wind">${data.wind}</div>
            <div class="card__date">${today.getDate()}</div>
        </div>
    </div>
        `)
    })
})

// console.log('hello');