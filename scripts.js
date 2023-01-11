$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    let {dob, gender, location, name, phone, cell, picture, email, nat} = data.results[0];
    document.getElementById('nombre').innerHTML = name.title + ' ' + name.first + ' ' + name.last;
    document.getElementById('imagen').setAttribute('src', picture.large);
    document.getElementById('name').innerHTML = name.first + ' ' + name.last;
    document.getElementById('gender').innerHTML = gender;
    document.getElementById('age').innerHTML = dob.age;
    document.getElementById('phone').innerHTML = formatPhone(phone);
    document.getElementById('cell').innerHTML = formatPhone(cell);
    document.getElementById('nat').innerHTML = nat;
    document.getElementById('country').innerHTML = location.country + '/' + location.state;
    document.getElementById('city').innerHTML = location.city + '/' + location.postcode;
    document.getElementById('street').innerHTML = location.street.name + '/' + location.street.number;
    document.getElementById('email').innerHTML = email;
    document.getElementById('imagen').onmouseover = name.first;
  }
});

function formatPhone(phone) {
  const onlyNumbers = phone.replace(/[^0-9]+/g, "");
  phone = '(' + onlyNumbers.substring(0, 3) + ') ' + onlyNumbers.substring(3 ,6) + '-' + onlyNumbers.substring(6, onlyNumbers.length);
  return phone;
}

window.onload = () => {

  const imagen = document.getElementById("imagen");
  const tooltip = document.getElementById("tooltip-text");
  
  imagen.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  }, false);
  
  imagen.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  }, false);
}