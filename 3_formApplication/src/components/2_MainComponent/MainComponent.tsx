import Card_1 from "../4_Extra/2_Cards/Card_1";
import AdditionwOfNewComponent from "../4_Extra/1_Actions/add";
import GreetUserLogin from "../4_Extra/1_Actions/greet";
import JsxRules from "../4_Extra/1_Actions/JsxRules";
import A1_maths from "../4_Extra/3_Expressions/A1_maths";
import A2_var_n_other from "../4_Extra/3_Expressions/A2_var_n_other";

const MainComponent = () => {
  return (
    <div>
      <GreetUserLogin></GreetUserLogin>
      <AdditionwOfNewComponent></AdditionwOfNewComponent>
      <Card_1 link="localhost:5173" User="mukuldk"></Card_1>
      <JsxRules></JsxRules>
      <A1_maths></A1_maths>
      <A2_var_n_other></A2_var_n_other>
    </div>
  );
};

export default MainComponent;
