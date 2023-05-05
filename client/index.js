var chatContainer = document.querySelector('#chat-container');
const form = document.querySelector('form');
const aiContent = document.querySelector('ai-content');

form.addEventListener('keyup',async (e)=>{
    if(e.keyCode===13){
        console.log(e)
        var userMessage = replaceAngleBrackets(document.getElementById("text-bar").value);
        document.getElementById("text-bar").value = "";
        chatContainer.innerHTML += createContainer("user",userMessage)
        var response = await getDetailsFromChatAI(userMessage);
        var data = await response.json();
        console.log(data)
        var text= data.data;
        const timestamp = new Date().getTime();
        const id = Math.floor(Math.random() * (1000 - 1) + 1) + timestamp + '-id'
        chatContainer.innerHTML += createContainer("AI",text,id);
        displayText(text,id)
        console.log(text)
    }   
})

function replaceAngleBrackets(text) {
    var replacedText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return replacedText;
  }

async function getDetailsFromChatAI(promt){
    console.log(promt)
    var response = await fetch('http://localhost:3005/api/getDetails',{
        method: 'POST',
        body: JSON.stringify({"text":`${promt}`}),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    return response
}

function displayText(content,id){
    console.log(content.length)
    i=0;
    const aiContent = document.getElementById(`${id}`);
    const intervalId = setInterval(() => {
        aiContent.innerHTML += content[i];
        i++;
        if (i >= content.length) {
          clearInterval(intervalId);
        }
      }, 25);
}

function createContainer(author,content,id){
    console.log(id)
    if(author==='user'){
        return(
            `
            <div class='user-container'>
                <div class='child'>
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class='user-content-div'>
                    <p class='user-content'>${content}</p>
                </div>
            </div>
            `
        )
    }   
    else{
        return(
            `
            <div class='ai-container'>
                <div class='child'>
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class='ai-content-div' id="${id}">
                    <p class='ai-content'></p>
                </div>
            </div>
            `
        )
    }
}