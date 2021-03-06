function onOff(){
        document.querySelector('#modal').classList.toggle('hide');
        document.querySelector('body').classList.toggle('hideScroll');
        document.querySelector('#modal').classList.toggle('addScroll');
}

function checkFields(event) {

        const valuesToCheck = [
                'title',
                'category',
                'image',
                'decription',
                'link',
        ]

        const isEmpty = valuesToCheck.find((value) => {
                
                const check = typeof event.target[value].value === "string";
                const checkIfIsEmpty = !event.target[value].value.trim();

                if (check && checkIfIsEmpty) {
                        return true;
                } 
        });

        if (isEmpty) {
                
                event.preventDefault();
                
                alert('Verifique se todos os campos foram preenchidos');
        }


}