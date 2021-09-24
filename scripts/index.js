const closeBtn = document.querySelector('.close-btn')
const openForm = document.querySelector('#open-form')
const testimonyForm = document.querySelector('.testimony-form')


function showForm() {
    window.addEventListener('click', function () {
        testimonyForm.classList.add('active')
    })
}

function closeForm() {
    window.addEventListener('click', function () {
        testimonyForm.classList.remove('remove')
    })
}