

const ideasContainer = document.getElementById('ideas-container');
const ideaForm = document.getElementById('idea-form');
const ideaInput = document.getElementById('idea-input');
const regExName = /^[a-zA-ZА-Яа-я\s]{1,3}$/
const nameInput = document.querySelector('.knop');
ideaForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const ideaText = ideaInput.value;
  
  const newIdea = document.createElement('div');
  newIdea.textContent = ideaText;
  ideasContainer.appendChild(newIdea);
  
  ideaInput.value = '';


  knop.addEventListener('keyup',()=>{

    if(regExName.test(knop.value)){
    
      knop.style.borderColor = 'green'
    }
    
    
    })

});





