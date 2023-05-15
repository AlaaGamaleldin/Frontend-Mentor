const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template");
const wrapper = document.querySelector("[data-js-wrapper]");


function forSubmit(event) {
    event.preventDefault();
    const rating = new FormData(event.target).get('rating');

    if (rating){
        
        wrapper.style.height = wrapper.offsetHeight + 'px';
     wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
    }
}
form.addEventListener('submit', forSubmit);