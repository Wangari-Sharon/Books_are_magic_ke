document.addEventListener("DOMContentLoaded", () => {

    function bookSearch(){
        var search = document.getElementById('search').value
        document.getElementById('results').innerHTML = ""
        console.log(search)
    
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
            dataType: "json",
    
    
            success: function(data) {
               for(i = 0; i < data.items.length; i++){
                const results= document.querySelector("#results")
                const card =document.createElement("div")
                card.className="card"
                card.innerHTML=`
                <div class="card" >
                <i class="fa fa-shopping-basket"></i>
                <img src="${data.items[i].volumeInfo.imageLinks.thumbnail}" alt="">
                <div class="descr">
                    <div>${data.items[i].volumeInfo.title}</div>
                    <div> ${data.items[i].volumeInfo.authors}</div>
                    <div> ${data.items[i].volumeInfo.publishedDate}</div>
                    <div> ${data.items[i].volumeInfo.pageCount}</div>
                </div>
            </div>
                `
                results.appendChild(card)
               
               }
            },
            type: 'GET'
        });
    }
    document.getElementById('button').addEventListener('click', bookSearch, false)
    
    bookSearch ()
    
    })