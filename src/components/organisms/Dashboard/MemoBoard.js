import React, {useState} from "react";
import Memo from "../../atoms/Fragment/Memo";
import AddMemo from "../../molecules/Dashboard/AddMemo";
import Title from "../../atoms/Text/DashboardTitle";

const flex = {
    display: 'flex',
    gap: '11vh',
    marginTop: '7vh',
    marginLeft: '11vh',
    width: '100vw',
    height: '100vh'
}

function MemoBoard() {

    const [memos, setMemos] = useState([]);

    function onAdd(newMemo) {
        setMemos(prevMemos => {
            return [
                ...prevMemos,
                newMemo
            ];
        });
    }

    function onDelete(id) {
        setMemos(prevMemos => {
            return prevMemos.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return <div style={flex}>
        <div>
            <Title>Memo</Title>
            <AddMemo onAdd={onAdd}/>
        </div>
        {
            memos.map((item, index) => {
                return (
                    <Memo
                        key={index}
                        id={index}
                        title={item.title}
                        content={item.content}
                        onDelete={onDelete}/>
                );
            })
        }
    </div>;
}

export default MemoBoard;