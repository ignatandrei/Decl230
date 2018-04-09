export class Persoana{
    constructor(){
        this.nume='';
        this.prenume='';
        
    }
    public nume:string;
    public prenume:string;
    public initialatatalui:string;
    public strada:string;
    public numar:string;
    public bloc:string;
    public scara:string;
    public etaj:string;
    public ap:string;
    public judet: string;
    public localitate:string;
    public codpostal: string;
    public cnp:string;
    public email: string;
    public telefon:string;
    public fax: string;
    exists(x:string):boolean
    {
        return (x||'').length>0;
    }
    public get isValid():boolean    
    {

        return this.exists(this.nume) 
        && this.exists(this.prenume)
        && this.exists(this.judet)
        && this.exists(this.localitate)
        && this.exists(this.cnp)
        && this.exists(this.email + this.telefon + this.fax)
        ;
    }
}