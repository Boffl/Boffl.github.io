
var img = document.createElement('img');

async function getDogPicture(){
	let response = await fetch('https://api.thedogapi.com/v1/images/search');
	
	if (response.ok){
		let json = await response.json();
		let url = json.url;
		img.src = json['0'].url;
		document.getElementById('picture').appendChild(img);
	} else {
		alert('HTTP Error: ' + response.status());
	}
	
}
