
<script>
    let calculate = function(){
        let bill = parseInt(document.querySelector("#bill").value)
        let tip = parseInt(document.querySelector("#tip").value)
        let people = parseInt(document.querySelector("#people").value)
        let result = ((bill * tip)/100)/people;
        let amount = (bill + tip)/people;
        if(people>=1){
            document.querySelector("#Tip_result").innerHTML = document.querySelector("#Tip_result").innerHTML+"<span> per person: </span>"+result+" $"
            document.querySelector("#Amount_result").innerHTML = document.querySelector("#Amount_result").innerHTML+"<span> per person: </span>"+amount+" $"
        }
        else if(tip>0){
            result = 0
            amount = bill
            document.querySelector("#Tip_result").innerHTML = document.querySelector("#Tip_result").innerHTML+": "+result+" $"
            document.querySelector("#Amount_result").innerHTML = document.querySelector("#Amount_result").innerHTML+": "+amount+" $"    
        }
        else{
        document.querySelector("#Tip_result").innerHTML = document.querySelector("#Tip_result").innerHTML+": "+result+" $"
        document.querySelector("#Amount_result").innerHTML = document.querySelector("#Amount_result").innerHTML+": "+amount+" $"
        }
    }
</script>
