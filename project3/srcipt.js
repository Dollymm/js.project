(function(){
    const buttons=document.querySelector('counterBtn')
    let count=0
    buttons.forEach(function(button){
       button.addEventListener('click',function(){
        if(button.classlist.contains('.prebBtn')){
            count--
        } 
        else if(button.classlist.contains('.nextBtn')){
            count++
        }
        const counter=document.querySelector
       }) 
    });
})