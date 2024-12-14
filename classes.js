class Toyatacar{

    start(){
    console.log("start");
    }
    stop(){

        console.log("stop");
        
    }
setbrand(brand){
    this.brandname=brand;
}

}

let fortuner= new Toyatacar();
fortuner.setbrand("fortuner new brand");
let lexus=new Toyatacar();
lexus.setbrand("lexus is brand ");