import Title from "../../atoms/Text/DashboardTitle";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


function CalendarBox() {

    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return <div>
        <Title>{ dateString }</Title>
        <br/><br/><br/><br/>
        <Calendar/>
    </div>
}

export default CalendarBox;