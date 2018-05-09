document.addEventListener('DOMContentLoaded', function () {// Create a "close" button and append it to each list item
    let myNodelist = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            const id = div.id;
            //при удалении отправляет post-запрос на сервер с id элемента
            $.post('', {id: id});
            div.style.display = "none";
        }
    }

    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            //при изменении статуса задачи передаем id задачи и ее статус
            $.post('', {id: ev.target.id, done: $(ev.target).hasClass('checked')});
        }
    }, false);

});

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        $.post('', {text: inputValue});
        console.log(inputValue)

    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}