// Y:PascalCassing
function MessageNew() {
  const UserName = 'Mukul';
  if (UserName) return <h1>Hello {UserName}</h1>;
  else return <h1>Hello REACT</h1>;
}

export default MessageNew; // IMP: no () at function export.
