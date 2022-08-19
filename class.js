class Bankdetails {
    constructor(name, acctype, accno, balance){
        this.name = name;
        this.accounttype = acctype;
        this.accountnumber = accno;
        this.balance = balance;
    }
}
var myaccount = new Bankdetails("USHA","PERSONAL BANKING ACCOUNT",987654321,10_00_000);
const officeaccount = new Bankdetails("SIVA","OFFICE ACCOUNT",123456789,12_00_00_000);
let familyaccount = new Bankdetails ("XXXYYY","FAMILY ACCOUNT",98766789,3_000);

console.log(myaccount,officeaccount,familyaccount);