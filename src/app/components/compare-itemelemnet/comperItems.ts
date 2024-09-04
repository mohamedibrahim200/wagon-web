export class Comitem{

    public Trim : string;
    public CarPrice : string;
    public Transmission : string;
    public EmbeddedRiders : string;
    public Lottary : string;
    public EngineCapacity_1 : string;
    public EngineCapacity_2 : string;
    public imageurl : string ;
    constructor(Trim : string , CarPrice : string , Transmission : string , EmbeddedRiders : string , Lottary : string , EngineCapacity_1 : string , EngineCapacity_2 : string , imageurl : string ){

        this.Trim = Trim;
        this.CarPrice = CarPrice;
        this.Transmission = Transmission;
        this.EmbeddedRiders = EmbeddedRiders;
        this.Lottary = Lottary;
        this.EngineCapacity_1 = EngineCapacity_1;
        this.EngineCapacity_2 = EngineCapacity_2;
        this.imageurl = imageurl;
    }
}