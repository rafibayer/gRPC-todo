const {NewTodo, TodoQuery, EditRequest, DeleteRequest, TodoItems, TodoItem} = require('./todo_pb.js');
const {TodoServiceClient} = require('./todo_grpc_web_pb.js');


document.title = process.env.APP_TITLE;
var todoClient = new TodoServiceClient(process.env.ENDPOINT_URL);

function ce(tagName) {
    return document.createElement(tagName);
}

function submitTodoQuery(includeCompleted) {
    let newTodoQuery = new TodoQuery();
    newTodoQuery.setIncludecompleted(includeCompleted);

    todoClient.getTodos(newTodoQuery, {}, (err, resp) => {
        if (err) {
            console.warn(err);
        } else {
            let allItems = resp.toObject().itemsList;
            let itemDiv = document.getElementById('items');
            allItems.forEach(item => {
                itemDiv.appendChild(renderTodoItem(item));
            });
        }
    });


}

function submitNewTodo(name, description, date) {
    let newTodoRequest = new NewTodo();
    newTodoRequest.setName(name);
    newTodoRequest.setDescription(description);
    newTodoRequest.setDuedate(date);

    todoClient.createTodo(newTodoRequest, {}, (err, resp) => {
        if (err) {
            console.warn(err);
        } else {
            document.getElementById('items').appendChild(renderTodoItem(resp.toObject()));
        }
    });

}

function submitDeleteRequest(id, todoDiv) {
    let deleteRequest = new DeleteRequest();
    deleteRequest.setId(id);

    todoClient.deleteTodo(deleteRequest, {}, (err, resp) => {
        if (err) {
            console.warn(err);
        } else {
            console.log('deleted ' + resp);
            todoDiv.parentNode.removeChild(todoDiv);
        }
    });

}

function submitEditRequest(id, newState, todoDiv) {
    let editRequest = new EditRequest();
    editRequest.setId(id);
    editRequest.setNewstate(newState);

    todoClient.editTodo(editRequest, {}, (err, resp) => {
        if (err) {
            console.warn(err);
        } else {
            let replacement = renderTodoItem(resp.toObject());
            todoDiv.parentNode.replaceChild(replacement, todoDiv);
        }
    });
}

function renderTodoItem(item) {
    let div = ce('div');

    let id = ce('p');
    id.innerText = `ID: ${item.id}`;
    div.appendChild(id);
    
    let name = ce('p');
    name.innerText = `Name: ${item.name}`;
    div.appendChild(name);

    let descr = ce('p');
    descr.innerText = `Description: ${item.description}`;
    div.appendChild(descr);

    let date = ce('p');
    date.innerText = `Due: ${item.duedate}`;
    div.appendChild(date);

    let complete = ce('p');
    complete.innerText = `Complete: ${item.completed}`;
    div.appendChild(complete);

    let deleteBtn = ce('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', 'x');
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        submitDeleteRequest(item.id, div);
    });

    let editBtn = ce('input');
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('value', 'Toggle Completed');
    div.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
        submitEditRequest(item.id, !item.completed, div);
    });

    return div;
}

function newTodoUI() {
    let div = ce('div');

    let nameInput = ce('input'); 
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    div.appendChild(nameInput);

    let descrInput = ce('input'); 
    descrInput.setAttribute('type', 'text');
    descrInput.setAttribute('placeholder', 'Description');
    div.appendChild(descrInput);

    let dateInput = ce('input'); 
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('value', getDateYMD());
    div.appendChild(dateInput);

    let submit = ce('input');
    submit.setAttribute('type', 'button');
    submit.setAttribute('value', 'Create');
    div.appendChild(submit);

    submit.addEventListener('click', () => {
        let name = nameInput.value;
        let descr = descrInput.value;
        let date = dateInput.value;
        submitNewTodo(name, descr, date);
    });


    return div;
}

function makeUI() {
    document.body.appendChild(newTodoUI());
    let items = ce('div');
    items.id = 'items';
    document.body.appendChild(items);
    submitTodoQuery(true);
}
makeUI();

function getDateYMD() {
    let today = new Date();
    let yyyy = today.getFullYear().toString();
    let mm = today.getMonth().toString().length > 1 ? today.getMonth().toString() : '0' + today.getMonth().toString();
    let dd = today.getDate().toString().length > 1 ? today.getDate().toString() : '0' + today.getDate().toString();
    result = `${yyyy}-${mm}-${dd}`;
    console.log(result);

    return result;
}