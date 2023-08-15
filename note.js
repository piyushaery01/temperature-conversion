function compute(){
    const inputtemp=document.getElementById("temp").value;
    const unit=document.getElementById("temp_unit").value;
    // const temp=temp_unit.options[unit.selectedIndex].value;
    const ctof=(cel)=>{
        let f=((cel * 9 / 5) + 32).toFixed(1);
        return f;
    }
    const ctok=(cel)=>{
        let k=(Number(cel) + 273.15).toFixed(1);
        return k;
    }
    const ktof=(kel)=>{
        let f=((kel - 273.15) * 9 / 5 + 32).toFixed(1);
        return f;
    }
    const ktoc=(kel)=>{
        let c=(kel - 273.15).toFixed(1);
        return c;
    }
    const ftoc=(fah)=>{
        let c=((fah - 32) * 5 / 9).toFixed(1);
        return c;
    }
    const ftok=(fah)=>{
        let f=(((fah - 32) * 5 / 9) + 273.15).toFixed(1);
        return f;
    }
    if (unit=='cel') {
        document.getElementById("result").innerHTML=ctof(inputtemp)+"F"+"<br/>"+ctok(inputtemp)+"K";
    }
    else if(unit=="kel"){
        document.getElementById("result").innerHTML=ktoc(inputtemp)+"C"+"<br/>"+ktof(inputtemp)+"F";
    }
    else if(unit=="fah"){
        document.getElementById("result").innerHTML=ftoc(inputtemp)+"C"+"<br/>"+ftok(inputtemp)+"K";
    }
    else{
        alert("No input selected");
    }
}