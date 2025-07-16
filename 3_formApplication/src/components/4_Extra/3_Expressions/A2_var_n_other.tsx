const A2_var_n_other = () => {
  const myname = "Mukul";
  const maths = (num1, sign, num2) => {
    const res = eval(`${num1} ${sign} ${num2}`);
    return (
      <span>
        The Resualt of The Expression `{num1} {sign} {num2}` is : {res}
      </span>
    );
  };

  return (
    <div>
      <p>Name: {myname}</p>
      <p>Friend List: {["Akki ", "Pranay ", "Yoga ", "Harsh ", "Vikram "]}</p>
      <p>{maths(3, "+", 8)}</p>
      <p>{maths(225, "/", 5)}</p>
      <p>{maths(1080, "*", 10)}</p>
    </div>
  );
};

export default A2_var_n_other;
