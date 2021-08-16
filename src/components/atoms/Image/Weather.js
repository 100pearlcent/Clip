import Lottie from 'react-lottie';
import Sunny from '../../../resources/lotties/sunny';
import Foggy from '../../../resources/lotties/foggy';
import Mist from '../../../resources/lotties/mist';
import PartialCloudy from '../../../resources/lotties/partly-cloudy';
import PartialShower from '../../../resources/lotties/partly-shower';
import SnowSunny from '../../../resources/lotties/snow-sunny';
import Snow from '../../../resources/lotties/snow';
import Storm from '../../../resources/lotties/storm';
import StormShower from '../../../resources/lotties/storm-shower-day';
import Thunder from '../../../resources/lotties/thunder';
import Windy from '../../../resources/lotties/windy';


export default function Weather(props) {
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // animationData: Foggy,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      // props로 전달받은 아이콘 값
      defaultOptions.animationData = props.icon;
    
    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={'35vh'}
          width={'35vh'}
        />
      </div>
    );
  }