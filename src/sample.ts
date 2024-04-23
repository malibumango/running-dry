const foobar = () => {
  console.log('Hello World!');
  var x = 1; // Zugriff von überall möglich
  const y = 'bar'; // Zugriff lokal, nicht mehr veränderbar
  let z = 2; // Zugriff lokal, veränderbar
  const stringType = 'bar'; // Zugriff lokal, nicht mehr veränderbar
  const numerType: number = 1; // Typ festlegen
  const numberTypeWithComma: number = 1.521283749; // Typ festlegen
  const booleanType: boolean = true || false; // Typ festlegen
  const arrayTypeWithString: Array<string> = ['a3214', 'b', 'c'];
  arrayTypeWithString[0].substring(0);

  const objectType = {
    foo: 'bar',
    baz: 'baz',
    num: 12,
  };
  console.log(objectType.foo);
  const arrayTypeWithNumber: Array<number> = [12, 26, 38];
};
type ObjectType = {
  foo: number;
  baz: string;
  onSomething: () => void;
};
foobar();
