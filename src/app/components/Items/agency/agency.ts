// create class (a
export class Agency {
  public  id: string;
  public  name: string;
  public  nameen: string ;
  public  imageurl: string ;
  public  locationurl: string ;
  public  locationname: string ;
  public  phonenumber: string ;
  public  Address: string ;
    constructor (id : string, name : string , nameen : string , imageurl : string , locationurl : string , locationname : string , phonenumber : string , Address : string  )
    {
       this.id = id;
       this.name = name;
       this.nameen = nameen;
       this.locationurl = locationurl;
       this.locationname = locationname;
       this.phonenumber = phonenumber;
       this.Address = Address;
       this.imageurl = imageurl;
    }
}