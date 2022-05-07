const checkbox = document.getElementById('checkbox')

checkbox.oddeventlistener('change',() => {
    document.body.classList.toggle('dark')
})