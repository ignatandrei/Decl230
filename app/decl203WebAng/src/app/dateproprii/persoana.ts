export class Persoana {

    constructor() {
        this.nume = '';
        this.prenume = '';

    }
    public nume: string;
    public prenume: string;
    public initialatatalui: string;
    public strada: string;
    public numar: string;
    public bloc: string;
    public scara: string;
    public etaj: string;
    public ap: string;
    public judet: string;
    public localitate: string;
    public codpostal: string;
    public cnp: string;
    public email: string;
    public telefon: string;
    public fax: string;
    exists(x: string): boolean {
        return (x || '').length > 0;
    }
    public get isValid(): boolean {
        var c=!this.exists(this.DeCompletat);
        console.log('is valid:'+ c);
        return c;

    }

    public get DeCompletat(): string {

        if (!this.exists(this.nume))
            return "nume";

        if (!this.exists(this.prenume))
            return "prenume";

        if (!this.exists(this.initialatatalui))
            return "intiala tatalui";
        if (!this.exists(this.judet))
            return "judet";
        if (!this.exists(this.localitate))
            return "localitate";
        if (!this.exists(this.cnp))
            return "cnp";
        if (!this.exists(this.email + this.telefon + this.fax))
            return "email, fax sau telefon";

        return "";
    }
}