

function callAPI(searchTerm) {

    const url = `https://pokeapi.co/api/v2/move/${searchTerm}/`;
    fetch(url)
      .then (response => response.json())
      .then (responseJson => render(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
    }
    function render(data) {
       
       const array = data.flavor_text_entries;
       const theOne = array.find(item => item.language.name === "en");
       $('h2').html(`<p>${theOne.flavor_text}</p>`);
      console.log(theOne);
    }
    
    
    function StartIt() {
      $('.form').submit(event => {
        event.preventDefault();
        const searchTerm = $('.inputBar').val();
        console.log(searchTerm)
        callAPI(searchTerm);
        $('.inputBar').val('');
      });
    }
    
    
    
    
    
    
    
    StartIt();