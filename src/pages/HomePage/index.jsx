import { Answer } from '../../components/Answer';
import { Question } from '../../components/Question';
import './style.css';

export const HomePage = () => {
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
};
