var user1 = {
    id: 1,
    name: "Jimena Luperdi", 
}
var user2 = {
    id: 2,
    name: "Carmen Rodriguez", 
}

var book1 = {
    title: "Cujo",
    category1: "Horror",
    ISBN: 843030407,
}

user1.books = [];
user2.books = [];


var book2 = {
    title: "Carrie",
    category: "Horror",
    ISBN: 8497364678,
}

var book3 = {
    title: "Misery",
    category: "Horror",
    ISBN: 8403094264,
}
user1.books.push(book1, book2, book3);

console.log(user1, user2);

var users = [];

users.push(user1, user2);

console.log(users);

var book4 = {
    title: "Revival",
    category: "Horror",
    ISBN: 8408058215,
}
user2.books.push(book4);


