

const form = document.getElementById("form") as HTMLFormElement;
const display = document.getElementById('display') as HTMLDivElement;

form.addEventListener('submit', (event:Event)=>{
    event.preventDefault()

    // collection of values
    const name = (document.getElementById('name') as HTMLInputElement).value 
    const email = (document.getElementById('email') as HTMLInputElement).value 
    const cell = (document.getElementById('cell') as HTMLInputElement).value 
    const education = (document.getElementById('education') as HTMLInputElement).value 
    const experience = (document.getElementById('experience') as HTMLInputElement).value 
    const skills = (document.getElementById('skills') as HTMLInputElement).value 


    // resume generator
const htmlResume = `
<h2>Resume</h2>
<h3>Profile</h3>
<p>Name:${name}</p>
<p>Email:${email}</p>
<p>Cell:${cell}</p>
<h3>Education </h3>
<ul>
<li>${education}</li>
<li>${education}</li>
<li>${education}</li>
</ul>

<h3>Experience </h3>
<p>${experience}</p>


<h3>Skills </h3>
<p>${skills}</p>
`;


// display resume

if(display){
    display.innerHTML=htmlResume;
    }else{
        console.error('error')
    }

})