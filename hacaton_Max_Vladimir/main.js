let currentPage = 1;
const API = `http://localhost:8000/students?_page=${currentPage}&_limit=6`
const secondAPI = 'http://localhost:8000/students'

let studentName = $('#student-name')
let studentSurname = $('#student-surname')
let phoneNumber = $('#phone-number')
let studentKpiWeek = $('#kpi-week')
let studentKpiMonth = $('#kpi-month')
let studentDesc = $('#student-desc')
let studentImage = $('#student-image')
let btnSave = $('.btn-save')
let modal = $('.modal')
let btnShowList =$('#show_list')
let btnShowCard =$('#show_card')
let listItem = $('#list')
let currentType = 1


// Create
async function addProduct(){
    let name = studentName.val()
    let surname = studentSurname.val()
    let phone = phoneNumber.val()
    let kpiWeek = studentKpiWeek.val()
    let kpiMonth = studentKpiMonth.val()
    let desc = studentDesc.val()
    let image = studentImage.val()
    
    let students ={
        name: name,
        surname: surname,
        phone: phone,
        kpiWeek: kpiWeek,
        kpiMonth: kpiMonth,
        desc: desc,
        image: image,
    }
    try{
        const response = await axios.post(API, students)
        console.log(response);
        Toastify({
            text: response.statusText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
            
          }).showToast();
          modal.modal('hide')
          render(API)
    } catch(e){
        Toastify({
            text: e.response.statusText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            }
            
          }).showToast();
    }
}

btnSave.on('click', addProduct)
btnShowCard.on('click', ()=>{
    currentType = 1
    render(API)
})

// Read

let list = $('.list')
let prev = $('.prev')
let next = $('.next')

async function render(url){
    try{
        const response = await axios(url)
        // console.log(response.headers.link);
        list.html('')
        response.data.forEach((item)=>{
            list.append(`<div class="card mt-3 mb-3" style="width: 18rem; ">
            <img style ="width: 100%; object-fit: containe; height: 65%" src="${item.image}" class="card-img-top" alt="...">
             <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h5 class="card-title">${item.surname}</h5>
              <h6>Телефон: ${item.phone}</h6>
              <h6>Недельный Kpi: ${item.kpiWeek}</h6>
              <h6>Ежемесячный Kpi: ${item.kpiMonth}</h6>
              <p class="card-text">${item.desc}</p>
              <button id=${item.id} type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                    Изменить
                  </button>
            </div>
          </div>
          `)
        })
 //paginations
        let links = response.headers.link.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim)

        if(!links){
            prev.attr('disabled', true)
            next.attr('disabled', true)
            return
        }
        if(links[0] === links[1]){
            prev.removeAttr('disabled')
        }
        if(links[2] === links[1]){
            next.removeAttr('disabled')
        }
        if(links.length === 4){
            prev.attr('id', links[1])
            next.attr('id', links[2])
            prev.removeAttr('disabled')
            next.removeAttr('disabled')
        }
        else if(links.length === 3 && currentPage ===1){
            prev.attr('disabled', true)
            next.attr('id', links[1])
        }
        else if(links.length === 3 && currentPage !== 1){
            next.attr('disabled', true)
            prev.attr('id', links[1])
        }

    }catch(e){
        console.log(e);
    }
}
render(API)
next.on('click', (e)=>{
    let url = e.target.id
    render(url)
    currentPage++
})
prev.on('click', (e)=>{
    let url = e.target.id
    render(url)
    currentPage--
})

//Search

let searchInp = $('.inp-search')
searchInp.on('input', (e)=>{
    let value = e.target.value
    let url = `${API}&q=${value}`
    render(url);
    currentPage = 1
})

//Update
let studentNameEdit = $('#student-name-edit')
let studentSurnameEdit = $('#student-surname-edit')
let phoneNumberEdit = $('#phone-number-edit')
let kpiWeekEdit = $('#kpi-week-edit')
let kpiMonthEdit = $('#kpi-month-edit')
let studentDescEdit = $('#student-desc-edit')
let studentImageEdit = $('#student-image-edit')
let btnSaveEdit = $('.btn-save-edit')
let btnDelete = $('.btn-delete')


$(document).on('click', '.edit-btn', async(e)=>{
    let id = e.target.id
    let clas = e.target.class
    
    try{
        const response = await axios(`${secondAPI}/${id}`)
        studentNameEdit.val(response.data.name)
        studentSurnameEdit.val(response.data.surname)
        studentDescEdit.val(response.data.desc)
        phoneNumberEdit.val(response.data.phone)
        kpiWeekEdit.val(response.data.kpiWeek)
        kpiMonthEdit.val(response.data.kpiMonth)
        studentImageEdit.val(response.data.image)
        btnSaveEdit.attr('id', id)
        btnDelete.attr('id', id)
        btnShowList.attr('id', id)
        btnSaveEdit.attr('class', clas)
        
        
    }
    catch(e){
        console.log(e);
    }
})

btnSaveEdit.on('click', async (e)=>{
    let id = e.target.id
    let name = studentNameEdit.val()
    let surname = studentSurnameEdit.val()
    let desc =  studentDescEdit.val()
    let phone = phoneNumberEdit.val()
    let kpiWeek = kpiWeekEdit.val()
    let kpiMonth = kpiMonthEdit.val()
    let image = studentImageEdit.val()
    let student = {
        name,
        surname,
        phone,
        kpiWeek,
        kpiMonth,
        desc,
        image
    };
    try{
        await axios.patch(`${secondAPI}/${id}`, student)
        modal.modal('hide')
        let url = `http://localhost:8000/students?_page=${currentPage}&_limit=6`
        console.log(currentType)
        if(currentType === 1)

{            render(url)}
        else{
            renderList()
        }
    }
    catch(e){
        console.log(e);
    }
})

btnDelete.on('click', async (e)=>{
    let id = e.target.id
    try{
        await axios.delete(`${secondAPI}/${id}`)
        modal.modal('hide')
        let url = `http://localhost:8000/students?_page=${currentPage}&_limit=6`
        render(url)
    }
    catch(e){
        console.log(e);
    }
})

async function renderList (){
    prev.css('display', 'none')
    next.css('display', 'none')

    // let id = e.target.id
    try{

        const response = await axios(`${secondAPI}`)
        let url = `http://localhost:8000/students?_page=${currentPage}&_limit=6`
        
        list.html('')
        list.append(`<table class="table">   <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Телефон</th>
          <th scope="col">Недельный KPI</th>
          <th scope="col">Месячный KPI</th>
          <th scope="col">Редактировать</th>
        </tr>
      </thead>
      <tbody class="my-tbody"></tbody>
    </table>`)
    let myTbody = $('.my-tbody')
                response.data.forEach((item, index)=>{
                    myTbody.append(`
                    <tr><td>${index+1}</td> <td>${item.name}</td><td>${item.surname}</td><td>${item.phone}</td><td>${item.kpiWeek}</td><td>${item.kpiMonth}</td><td><button id=${item.id} type="button" class="btn btn-primary edit-btn-list" data-bs-toggle="modal" data-bs-target="#editModal">
                    Изменить
                  </button></td></tr>
             `
                        )}
                )}
    catch (e){
        console.log(e);
    }
}
$(document).on('click', 'edit-btn-list', ()=>{
    
    renderList()

})
btnShowList.on('click', async (e)=>{
    currentType = 2
    console.log(currentType)
    renderList()
})