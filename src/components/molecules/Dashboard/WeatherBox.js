import {useState, useEffect} from "react";
import Icon from "../../atoms/Image/Weather";
import Temperature from "../../atoms/Text/Temperature";
import City from "../../atoms/Text/City";
import Sunny from '../../../resources/lotties/sunny';
import Foggy from '../../../resources/lotties/foggy';
import Mist from '../../../resources/lotties/mist';
import PartialCloudy from '../../../resources/lotties/partly-cloudy';
import PartialShower from '../../../resources/lotties/partly-shower';
import Snow from '../../../resources/lotties/snow';
import Storm from '../../../resources/lotties/storm';

// 날씨 API Key는 삭제 한 채로 업로드 했습니다
// 포트폴리오의 스크린샷을 참고해주세요

const api = {
    key: "",
    base: "https://api.openweathermap.org/data/2.5/"
}

const style = {
    textAlign: 'center',
    maxHeight: '70vh'
}

function WeatherBox() {
    const [climate, setClimate] = useState({});
    const [icon, setIcon] = useState(Sunny);

    useEffect(() => {
        fetch(`${api.base}weather?q=seoul&units=metric&APPID=${api.key}`)
            .then(
                res => res.json()
            )
            .then(result => {
                setClimate(result);

                if (typeof climate.main != "undefined") {
                    switch (climate.weather[0].icon) {
                        case '01d':
                        case '01n':
                            return setIcon(Sunny);
                        case '02d':
                        case '02n':
                            return setIcon(PartialCloudy);
                        case '03d':
                        case '03n':
                        case '04d':
                        case '04n':
                        case '50d':
                        case '50n':
                            return setIcon(Foggy);
                        case '09d':
                        case '09n':
                            return setIcon(PartialShower);
                        case '10d':
                        case '10n':
                            return setIcon(Mist);
                        case '11d':
                        case '11n':
                            return setIcon(Storm);
                        case '13d':
                        case '13n':
                            return setIcon(Snow);
                        default:
                            return setIcon(Sunny);
                    }
                }
            });
    }, []);

    return <div style={style}>
        <Icon icon={icon}/>
        <Temperature>{
                (typeof climate.main != "undefined")
                    ? Math.round(climate.main.temp)
                    : ''
            }</Temperature>
        <City>{climate.name}</City>
    </div>
}

export default WeatherBox;