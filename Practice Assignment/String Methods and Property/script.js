console.log('Radha')
const myName = 'Hii My Name is Radha'

const SchoolName = '    Y C College Karad    '

const Length= myName.length

const myNameUppercase = myName.toUpperCase()
const myNameLowercase = myName.toLocaleLowerCase()

const trim1 =SchoolName
const trim2=SchoolName.trim()       //to remove extra space

const trim3 =SchoolName.trimStart()
const trim4 =SchoolName.trimEnd()

const AnotherString=SchoolName.includes("Karad")  ///SchoolName Madhe Krad Asel tar True Show Karen
const AnotherString1 = SchoolName.includes('Y C ')

const Position = myName.indexOf('N')  ///N Chi Position Dakhavato

const replace = SchoolName.replace(' Y C ',' SGM ')                      ///Replace Character or Statement
const AllReplace = SchoolName.replace("Y C College Karad " , "SGM College Satara")

const AddString = myName.concat( trim2)      ///Add two String
const AddString1 = myName + '  ' + trim2

const AccountNumber = '4569'

const AccountNumber1 = AccountNumber.padStart(16,'*')   /// Not a Mask But we provide digit As a * 
const AccountNumber2 = AccountNumber.padEnd(16,'*')    ///star Provide Ending 

const ProvideCharacter = myName.charAt(5)

const AsciiValue = myName.charCodeAt(5)   /// Ascii Value Provide Karto ty perticular Character chi

const CharacterArray = myName.split()  // Array Banvato

const Information = ` My Account Number is ${AccountNumber}`   //Use Of BackTicks ``
const Information1 = ` My Account Number is $${AccountNumber}`