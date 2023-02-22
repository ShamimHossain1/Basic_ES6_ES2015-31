document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend')
    for(const friend of friends){
        friend.style.backgroundColor = 'red'

    }
})
document.getElementById('center-4th').addEventListener('click', function(){
    const third = document.getElementById('4th');
    third.style.textAlign = 'center';
})
document.getElementById('add').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div')
    friend.classList.add('friend')
    friend.innerHTML = `
    <h1 class="friend-name"> new friend<h1/>
    <p>Moga<p/>
    `
    friendContainer.appendChild(friend);

})