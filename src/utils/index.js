export function getQuotesList(){
  console.log('22222222')
  return fetch('http://localhost:1337/api/')
    .then(res => {
      return res.json();
    })  
}