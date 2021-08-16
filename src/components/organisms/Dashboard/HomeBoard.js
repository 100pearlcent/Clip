import CalendarBox from "../../molecules/Dashboard/CalendarBox";
import WeatherBox from "../../molecules/Dashboard/WeatherBox";

const flex = {
    display: 'flex',
    gap: '20vh',
    marginTop: '19vh',
    marginLeft: '18vh',
}

function HomeBoard() {
    return <div style={flex}>
        <CalendarBox/>
        <WeatherBox/>
    </div>
}

export default HomeBoard;