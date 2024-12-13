async function fetchData() {
  try {
    const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=q:">C"+cnt:"uk"+grp:"birds"+type:"song"+len:"<10"` 
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Handle your data
    const data = await response.json(); //May not need as should be giving us a JSON payload.
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle any errors

  }
}

fetchData();


//Store access to the iframe contents and the new song (Play birdsong) button.
const iframe = document.getElementById('iframe');
const newSongBtn = document.getElementById('newBirdSong');

//Add eventListener to New Song (play birdsong) btn
//(Works when page loaded and birdList is populated) <--------------------
//When New Song Here btn clicked
//Set #iframe src to `https:${birdList[1]["url"]}/embed`
newSongBtn.addEventListener("click", () => {
  iframe.src = `https:${birdList[1]["url"]}/embed`;
  iframe.
});









