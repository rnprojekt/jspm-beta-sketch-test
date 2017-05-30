
export function createElement(type='div', id='container') {
  let elem = document.createElement(type);
  elem.setAttribute('id', id);
  window.document.body.appendChild(elem);
  return document.getElementById(id);
}
