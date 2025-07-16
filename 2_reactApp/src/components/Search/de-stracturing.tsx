/* G:
 * 1. This is the test file that is not begin included anywhere.
 * 2. This file is use to test the tsx installed with phpm to run the file directly in terminal.
 * 3. pnpm add -g tsx will add a tsx runner.
 * 4. tsx vs tcs =>
 * Y:
 *     a tcs = 1. compile tcs to jx.
 *             2. run js file.
 *       tsx = directly run file....
 * G:
 * 5. run like PHP file and get resualts with errors before doing anythign.
 * */

const person = {
  Pname: 'Bruce Wane',
  Page: 29,
  Plocation: 'Gotham City',
  Pjob: {
    Pnormal: 'Billeanoer',
    Pcompany: 'wane interprices',
    Phidden: 'BATMAN',
    Phidden_work: 'Visaulanty',
  },
};

// Y: descracturing same as RUST:
const { Pname, Page, Plocation, Pjob } = person;
const { Pnormal, Pcompany, Phidden, Phidden_work } = Pjob;

console.log(
  ' Pname = ',
  Pname,
  '\n Page = ',
  Page,
  '\n Plocation = ',
  Plocation,
  '\n Pjob = ',
  Pjob,
  '\n Pnormal = ',
  Pnormal,
  '\n Pcompany = ',
  Pcompany,
  '\n Phidden = ',
  Phidden,
  '\n Phidden_work = ',
  Phidden_work
);
