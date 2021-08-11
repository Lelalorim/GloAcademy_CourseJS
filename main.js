const apiKey = 'f1fc37447d02f1f02148',
  currentValuta = document.getElementById('CURR_FR'),
  newValuta = document.getElementById('CURR_TO'),
  amountValuta = document.getElementById('CURR_FR_VAL'),
  result = document.getElementById('CURR_VAL'),
  btnConvert = document.getElementById('convertVal');
  
btnConvert.addEventListener('click', ()=>{
  const valToValString = currentValuta.options[currentValuta.selectedIndex].value +
    '_' + newValuta.options[newValuta.selectedIndex].value;

  fetch(`https://free.currconv.com/api/v7/convert?q=${valToValString}&compact=ultra&apiKey=${apiKey}`)
    .then(response=>{

      if (response.status !== 200){
        throw new Error('status network not 200');
      }
      return response.json();
    })
    .then(response => {
      console.log(`Текущий курс: ${response[valToValString]} ${currentValuta.value} к 1 ${newValuta.value}`);
      result.value = (response[valToValString] * amountValuta.value).toFixed(2);
    })
    .catch(error => console.error(error));
});
