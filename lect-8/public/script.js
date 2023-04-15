// console.log(jQuery)

  function refreshList(){
    $.get('/todo',(data)=>{
        for(let todo of data){
             $('#list').append(`<li>${todo}</li>`)
        }
    
        console.log(data)
    })

  }
  refreshList()

// Task 1 only input Array update


$('#btn').on('click',()=>{
    let todo=$('#inp').val()
    $.post('/todos',{todo},(data)=>{
        $('#inp').val('')
        refreshList()
        console.log(data)

    })
})