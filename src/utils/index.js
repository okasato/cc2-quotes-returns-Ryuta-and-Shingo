export function getQuotesList(){
  return fetch('http://localhost:1337/api/')
    .then(res => {
      return res.json();
    })  
}