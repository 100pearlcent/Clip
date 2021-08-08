// import React, {useState, useRef} from 'react';
// import Textfield from "../../atoms/Input/DashboardTF";

// import ListBox from "../../molecules/Dashboard/ListBox";
// import MemoBox from "../../molecules/Dashboard/MemoBox";

// import CalendarBox from "../../molecules/Dashboard/CalendarBox";
// import {useToDoDispatch, useToDoNextId} from "../../../ToDoContext";
// import {value} from 'dom7';
// import TaskLeftBox from '../../molecules/Dashboard/TaskLeftBox';


// const flex = {
//     display: 'flex'
// }


// function RightBoard() {
//     // const [todo, setTodo] = useState('');

//     // /* 투두리스트 Context API */
//     // const dispatch = useToDoDispatch();
//     // const nextId = useToDoNextId();
//     // const todoInput = useRef();

//     // const onChangeT = e => setTodo(e.target.value);
//     // const onSubmitT = e => {
//     //     e.preventDefault(); // 새로고침 방지
//     //     dispatch({
//     //         type: 'CREATE',
//     //         todo: {
//     //             id: nextId.current,
//     //             text: todo,
//     //             done: false
//     //         }
//     //     });
//     //     setTodo('');
//     //     todoInput.current.value = '';
//     //     nextId.current += 1;
//     // }

//     // return <div style={flex}>
//     //         <ListBox/>
//     //         <TaskLeftBox/>
//     //         <form onSubmit={onSubmitT}>
//     //             <Textfield
//     //                 placeholder="Write Things To Do + ⏎"
//     //                 maxLength="25"
//     //                 onChange={onChangeT}
//     //                 ref={todoInput}
//     //                 />
//     //         </form>

//         {/* <section style={flex}>
//             <MemoBox/>
//             <Textfield
//                 placeholder="Write Things To Keep + ⏎"
//                 maxLength="25"
//                 style={textfield}/>
//         </section>  */
//         }
//     </div>
// }

// export default React.memo(RightBoard);