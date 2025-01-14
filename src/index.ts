
class person{
    name:string;
    constructor(name:string){
     this.name=name;
    }

    displayRole():void{
        console.log(this.name +" is a person");
    }
}

class member extends person{
    borrowedBooks:book[]=[];
    constructor(name:string){
     super(name);
    }
    
    borrowbook(book:book){
       
        this.borrowedBooks.push(book)
        console.log(book.title+" is borrowed by "+ this.name);
        
    }

    returnbook(book:book){
          this.borrowedBooks=this.borrowedBooks.filter(element=>{book.title!=element.title })
          console.log(`${book.title} is returned by ${this.name}`);
          
    } 

    displayRole(): void {
        console.log(this.name+"is a menber of the library");
        
    }
}

class librarian extends person{
    constructor(name:string){
        super(name);
       }
       displayRole(): void {
           console.log(this.name+"is librarian of the library");
           
       }
}

class book{
    title:string;
    author:string;

    constructor(title:string,author:string){
        this.title=title;
        this.author=author;
    }
}


class library{
    books:book[]=[];
    librarian:librarian;
    members:member[]=[]

    constructor(librarian:librarian){
        this.librarian=librarian;
    }

    addbook(book:book){
        this.books.push(book)
        console.log(`"${book.title}" by ${book.author} has been added to the library.`);
    }

    displaybooks():void {
        console.log("Books  in the library: including borrowed");
        this.books.forEach(book => console.log(`- "${book.title}" by ${book.author}`));
    }

    addmember(member:member){
        this.members.push(member)
        console.log(`${member.name} has been added as a library member.`);
    }


}

const keerthi=new librarian("keerthika");
const yadhu=new member('yadhu');
const arshi=new member("arshi");

const book1=new book("book1",'author1');
const book2=new book("book2",'author2');
const book3=new book("book3",'author3');


const mylibrary=new library(keerthi);
mylibrary.addbook(book1)
mylibrary.addbook(book2)
mylibrary.addbook(book3)


mylibrary.displaybooks()

yadhu.borrowbook(book1);
yadhu.returnbook(book1);
