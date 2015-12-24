export class User {
  private id: string;
  private name: string;
  private roles: string[];
  
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;    
  }
  
  getId() {
      return this.id;
  }
  
  getName() {
      return this.name;
  }  
} 
