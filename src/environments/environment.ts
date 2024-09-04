export const environment = {
    yearModels: 50,
    GetClientInfo: "https://api.ipregistry.co/?key=tryout"
};

export const cities = {};

export const carBrands = [];

export const patterns={ 
    passwordPattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
    namesPattern: "[^a-zA-Z \\p{InArabic}]",
    userName: "[^a-zA-Z \d]",
    NumbersOnly: /^\d+$/
}
export const Users = [
    {
        id: 1,
        FirstName: "Mohamed",
        LastName: "Ramy",
        userName: "MohamedRamy",
        PhoneNumber: "1654651216",
        Birthday: "30/03/1994",
        email: "mohamed.ramy@gmail.com",
        password: "P@ssw0rd",
        gender: 'Male'
    },
    {
        id: 2,
        FirstName: "Hossam",
        LastName: "Farg",
        userName: "HossamFarg",
        PhoneNumber: "1654651216",
        Birthday: "30/03/1987",
        email: "hossam.farg@gmail.com",
        password: "P@ssw0rd",
        gender: 'Male'
    },
    {
        id: 3,
        FirstName: "Taha",
        LastName: "Kimo",
        userName: "TahaKimo",
        email: "Taha.kimo@gmail.com",
        PhoneNumber: "1654651216",
        Birthday: "30/03/1997",
        password: "P@ssw0rd",
        gender: 'Male'
    }
]