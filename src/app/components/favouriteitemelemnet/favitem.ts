export class Favitem {
    public model: string;
    public name: string;
    public price: number;
    public location: string;
    public Kilometers: number;
    public year: number;
    public Posted_On: string;
    public Updated_On: string;
    constructor(model : string , name : string , price : number , location : string , Kilometers : number , year : number , Posted_On : string , Updated_On : string){
        this.model = model;
        this.name = name;
        this.price = price;
        this.location = location;
        this.Kilometers = Kilometers;
        this.year = year;
        this.Posted_On = Posted_On;
        this.Updated_On = Updated_On;
    }
  
}
