document.getElementById('add_task').addEventListener('click',
    function(){
        t = document.getElementById('task')
        task =t.value
        // console.log(task)
        const todo_list = document.getElementById('todo_list')
        check = document.createElement('input')
        check.type='checkBox'
        // check.disabled = true
        check.classList.add('task_list')
        li = document.createElement('li')
        task_text  =  document.createTextNode(task)
        delete_button = document.createElement('button')
        // delete_button.value = 'DELETE'
        // console.log(delete_button);
        delete_text = document.createTextNode('DELETE')
        delete_button.appendChild(delete_text)
        delete_button.style.marginLeft ='40px'
        delete_button.classList.add('delete_button')
        li.appendChild(check)
        li.appendChild(task_text)
        li.appendChild(delete_button)
        todo_list.appendChild(li)
        t.value = ''
    }
)
document.getElementById('todo_list').addEventListener('click',
    function(event){
        event.target.classList.toggle('done')
        t  = event.target

        if (t.tagName.toLowerCase() === "input" )
            check_do(event)
        else{
            if (t.firstChild.checked)
                t.firstChild.checked=false;
            else
                t.firstChild.checked=true;        
        }
    }
)
function check_do(event){
    if (t.checked)
        event.target.parentElement.classList.add('done')
    else
        event.target.parentElement.classList.remove('done')

}
document.getElementById('todo_list').addEventListener('click',
    function(event){
        t  = event.target
        event.target.addEventListener('click',check_do(event) )  })



document.getElementById('todo_list').addEventListener('click',
    function(event){
        t  = event.target
        if (t.tagName.toLowerCase() === "button" ){
            if (t.classList.contains('delete_button')){
                t.parentElement.remove()
            }
        }
    }
)

