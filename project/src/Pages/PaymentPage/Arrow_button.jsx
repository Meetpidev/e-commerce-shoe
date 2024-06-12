import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Arrow_button.css';

function Arrow_button({text}) {
    return (
        <button className="arrow-button">
        
            {text}
            <KeyboardArrowRightIcon  className="icon-arrow"/>

        </button>

    );

}

export default Arrow_button;


