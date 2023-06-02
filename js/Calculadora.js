function convertToMoonWeight() {
    let weightInput = document.getElementById('weight');
    let resultInput = document.getElementById('result');
    let weight = parseFloat(weightInput.value);
    if (isNaN(weight)) {
        resultInput.value = 'Error';
        return;
    }
    let moonWeight = weight * 0.17;
    resultInput.value = moonWeight.toFixed(2) + ' kg';
}

var commentForm = document.getElementById('commentForm');
var commentUL = document.getElementById('commentUL');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var name = document.getElementById('nameInput').value;
    var comment = document.getElementById('commentInput').value;

    var li = document.createElement('li');
    li.textContent = name + ': ' + comment;
    commentUL.appendChild(li);

    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';
});

//var commentList = document.getElementById('commentList');

//function addComment(comment) {
//    var li = document.createElement('li');
//    li.textContent = comment;
//    commentList.appendChild(li);
//}

//addComment('Nuevo comentario');