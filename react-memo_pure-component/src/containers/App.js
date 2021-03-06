import ClassFacebook from '../components/ClassComponents/PureComponent/ClassFacebook';
import FuncFacebook from '../components/FuncComponents/ReactMemo/FuncFacebook';
import EnhancedCommentCounter from '../components/HOC/CommentCounter';
import EnhancedLikeCounter from '../components/HOC/LikeCounter';
import Counter from '../components/Refs/useRef-Counter';
import FormInput from '../components/Refs/FormInput';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ClassFacebook /> */}
      <FuncFacebook />

      {/* <EnhancedCommentCounter />
      <EnhancedLikeCounter /> */}
      {/* <FormInput />
      <Counter /> */}
    </div>
  );
}

export default App;
