(function(){
    const buttons=document.querySelectorAll('.btn')
    const storeImages= document.querySelectorAll('.store-items')

    buttons.forEach((button) =>{
        button.addEventListener('click' ,(e)=>{
            e.preventDefault()
            const filter= e.target.dataset.filter
            storeImages.forEach((items)=>{
                if (filter==='all'){
                    items.style.display='block'
                }
                else{
                    if(items.classList.contains(filter)){

                        items.style.display='block' 
                    }
                    else{
                        items.style.display='none'
                    }
                }
            })

        })
        
    })

})();