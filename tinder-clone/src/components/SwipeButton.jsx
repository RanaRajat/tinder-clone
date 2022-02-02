import "./SwipeButton.css";
import ReplayIcon from '@mui/icons-material/Replay';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SwipeButtons = ()=>{
    return <div className="swipeButtons">
         <IconButton className="swipe__icons">
             <ReplayIcon className="Replay" fontSize="large"/>
        </IconButton> 
        <IconButton className="swipe__icons">
             <StarRateIcon className = "Star" fontSize="large"/>
        </IconButton> 
        <IconButton className="swipe__icons">
             <CloseIcon className="Close" fontSize="large"/>
        </IconButton> 
        <IconButton className="swipe__icons">
             <FavoriteIcon className="Love" fontSize="large"/>
        </IconButton> 
        <IconButton className="swipe__icons">
             <FlashOnIcon className="Flash" fontSize="large"/>
        </IconButton> 
    </div>
}
export default SwipeButtons;