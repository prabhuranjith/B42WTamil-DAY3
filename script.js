//1.For given JSON itreate over all (for loop,for in,for of,for each)

var employee=[
    {"Name":"prabhu ranjith",
         "age":"25",
         "email":"prabhuranjith110797@gmail.com"},
        ];

 //for loop   
for(let i=0;i<employee.length;i++)
{
   console.log(employee[i]);          
} ;

//for in loop
for( let yyy in employee){
    console.log(employee[yyy]);
} ;       

//for of loop
for(let a of employee){
    console.log(a);
};

//for eachloop
employee.forEach(function()
{
    console.log(employee[0]);
});

 //2.create as your own resume data in JSON FORMAT//
 
 var myResume={
    "basics": {
      "name": "PRABHU RANJITH S",
      "email": "prabhuranjith110797@gamil.com",
      "phone": 00000000,
      "degree": "BBA Networking",
      "location": {
        "postalCode": 605602,
        "city": "villupuram",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "work": [
      {
        "company": "Samsung electronics pvt ltd in india",
        "position": "SALES CONSULTANT",
        "startDate": "18-10-2016",
        "endDate": "01-09-2021",
      },
    ],
    "education": [
      {
        "institution": "Periyar Universty in salem",
        "department": "Networking",
        "studyType": "distance",
        "batch start year": 2017,
        "batch end year": 2020,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "script writter",
      }
    ]
  }
  console.log(myResume);

