export class Dealer{
  public  name: string ;
  public  nameEn: string ;
  public  startTime: string ;
  public  endTime: string ;
  public  locationUrl: string ;
  public  locationName: string ;
  public  phoneNumber: string ;
  constructor( name : string , nameEn : string ,  startTime : string , endTime : string , locationUrl : string , locationName : string , phoneNumber : string ){
            this.name = name;
            this.nameEn = nameEn;
            this.startTime = startTime;
            this.endTime = endTime;
            this.locationUrl = locationUrl;
            this.locationName = locationName;
            this.phoneNumber = phoneNumber;
  }
  }