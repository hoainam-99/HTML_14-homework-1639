
var studentsList = []
var currentIndex = -1
openLocalStorage()

function saveLocalStorage(){
    let json = JSON.stringify(studentsList)
    localStorage.setItem('studentsList', json)
}


function openLocalStorage(){
    let json = localStorage.getItem('studentsList')
    if(json != null && json != ''){
        studentsList = JSON.parse(json)
    }
    $('#result_id').html("")
    // let ketQua
    // for (var i = 0; i < studentsList.length; i++){
        // ketQua += '<tr>'
        //     +'<td>' + parseInt(i+1) +'</td>'
        //     +'<td>' + studentsList[i].username + '</td>'
        //     +'<td>' + studentsList[i].fullname + '</td>'
        //     +'<td>' + studentsList[i].email + '</td>'
        //     +'<td>' + studentsList[i].birthday + '</td>'
        //     +'<td class="btn"><button class="edit-btn" onclick="editData('+ i +')">Edit</button></td>'
        //     +'<td class="btn"><button class="delete-btn" onclick="deleteData('+ i +')">Delete</button></td>'
        // +'</tr>'
    // }
    // $('#result_id').html(ketQua)
    for(let i = 0; i < studentsList.length; i++){
        $('#result_id').append(`<tr>
        <td>${i+1}</td>
        <td>${studentsList[i].username}</td>
        <td>${studentsList[i].fullname}</td>
        <td>${studentsList[i].email}</td>
        <td>${studentsList[i].birthday}</td>
        <td class="btn"><button class="edit-btn" onclick="editData(${i})">Edit</button></td>
        <td class="btn"><button class="delete-btn" onclick="deleteData(${i})">Delete</button></td>
    </tr>`)
    }
}


function editData(index){
    currentIndex = index
    $('#username_id').val(studentsList[index].username)
    $('#fullname_id').val(studentsList[index].fullname)
    $('#email_id').val(studentsList[index].email)
    $('#birthday_id').val(studentsList[index].birthday)
}

function deleteData(index){
    if(!(confirm('Are you sure to delete this data?'))) return
    studentsList.splice(index,1)
    saveLocalStorage()
    openLocalStorage()
}

function addData(){

    let student = {
        username : $('#username_id').val(),
        fullname : $('#fullname_id').val(),
        email : $('#email_id').val(),
        birthday : $('#birthday_id').val()
    }

    if(currentIndex >= 0){
        studentsList[currentIndex] = student
        currentIndex = -1
    }else{
        studentsList.push(student)
    }

    saveLocalStorage()
    openLocalStorage()

    return false
}
