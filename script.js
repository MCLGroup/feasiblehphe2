const select = document.getElementById('weather');
const para = document.querySelector('h6');

select.addEventListener('change', setWeather3);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = '';
  } else if (choice === 'rainy') {
    para.textContent = '';
  
  }
}


const select2 = document.getElementById('weather2');
select2.addEventListener('change', setWeather2);
function setWeather2() {
	const choice2 = select2.value;
if (choice2 === 'satulima') {
    para.textContent = 'tes';
  } else if (choice2 === 6) {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice2 === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice2 === 'overcast') {
	para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
	;
  } else {
    para.textContent = '';
  }
}

const select3 = document.getElementById('weather3');
select3.addEventListener('change', setWeather3);
function setWeather3() {
	const choice  = select.value
	const choice3 = select3.value;
	const choice2 = select2.value;
if (choice3 === 'tigapuluh' && choice2 === 'satulima' && choice === 'sunny') {
    para.textContent = 'Temperatur Keluar Evaporator : 28,21 Celcius' ;
  } else if (choice3 === 'tigalima' && choice2 === 'satulima' && choice === 'sunny') {
    para.textContent = 'Temperatur Keluar Evaporator : 31,53 Celcius';
  } else if (choice3 === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice2 === 'overcast') {
	para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
	;
  } else {
    para.textContent = '';
  }
}


function calculate2() 
{
	let tei=document.getElementById("tei").value
	let teo=document.getElementById("teo").value
	let tci=document.getElementById("tci").value	
	
	let efek =(tei-teo)/(tei-tci)
	
	document.getElementById("efektivitas").innerHTML = ` Efektivitas : ${efek}`
	
	

}

function calculate3() 
{
	let am=document.getElementById("am").value
    let ks=document.getElementById("ks").value
    let tei=document.getElementById("tei").value
	let teo=document.getElementById("teo").value
		
	
	let pp = am * ks *(tei-teo)
	
	document.getElementById("pemulihanpanas").innerHTML = `${pp} Watt`
	
	

}