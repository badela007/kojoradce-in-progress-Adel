import { Answer } from '../../components/Answer';
import { Positions } from '../../components/Positions';
import { Question } from '../../components/Question';
import { Techniques } from '../../components/Techniques';
Techniques;
import './style.css';

/*export const HomePage = () => {
  return (
    <div className="container">
     <h2></h2>
     <Question />
     <div></div>
     <Answer />
     <Answer />
     <Answer /> 
     
    </div>
  );
};*/

export const HomePage = () => {
  return (
    <div className="container">
      <Positions />
      <Techniques />
    </div>
  );
};
