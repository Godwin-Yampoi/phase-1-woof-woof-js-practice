fetch('http://localhost:3000/pups')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  })
  function displayPups(pups) {
    const dogBar = document.getElementById('dog-bar');
    
    pups.forEach(pup => {
      const span = document.createElement('span');
      span.textContent = pup.name;
      dogBar.appendChild(span);
    });
  }
  function displayPupInfo(pup) {
    const dogInfo = document.getElementById('dog-info');
    dogInfo.innerHTML = `
      <img src="${pup.image}" />
      <h2>${pup.name}</h2>
      <button>${pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
    `;
  }
  
  function displayPups(pups) {
    const dogBar = document.getElementById('dog-bar');
    
    pups.forEach(pup => {
      const span = document.createElement('span');
      span.textContent = pup.name;
      span.addEventListener('click', () => displayPupInfo(pup));
      dogBar.appendChild(span);
    });
  }
    