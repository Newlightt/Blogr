// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown]")
//     if (!isDropdownButton && e.target.cloest('[data-dropdown-button]') !=null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.cloest('[data-dropdown-button]')
//         currentDropdown.classlist.toggle('active')
//     }

//     document.querySelectorAll('[data-dropdown-button].active').forEach(button => {
//         if(button === currentDropdown) return
//         button.classList.remove('active')
//     })
// })