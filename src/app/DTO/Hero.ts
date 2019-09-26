//export modificador de visibilidad
export class Hero{

    Id: number;
    Name: string;
    Edad: number;
    
    constructor(
        public id?: number ,
        public name?: string,
        public edad?: number
        ){
            this.Id = id && id || 0;
            this.Name = name && name || "";
            this.Edad = edad && edad || 0;
        }
}