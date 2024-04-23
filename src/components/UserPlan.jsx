import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';


const UserPlan = () => {
  const [isStandard, setIsStandard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const changeToStandard = () => {
    setIsStandard(true)
    setAlertMessage('Your plan has been changed to the Standard Plan. This change will take effect from the 1st day of the next month.');
    setShowAlert(true);
  }

  const changeToLow = () => {
    setIsStandard(false)
    setAlertMessage('Your plan has been changed to the Low User Plan. This change will take effect from the 1st day of the next month.');
    setShowAlert(true);
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);
  
  return (
    <>
      
      <div className='user-plan'>
        <div className='plan-option'>
        {!isStandard ? (
          <>
            <h3 className='plan-title'>Low User Plan</h3>
            <div className='charge-info'>
              <p>120.000 c/day</p>
              <p>26.725 c/kwh</p>
            </div> 
          </>
        ) : (
          <>
            <h3 className='section-title'>Standard User Plan</h3>
            <div className='charge-info'>
              <p>90.000 c/day</p>
              <p>29.823 c/kwh</p>
            </div>
          </>
          )}
          </div>
        <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button className='change-plan-btn' variant="contained" {...bindTrigger(popupState)}>
              Change Plan
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={() => {changeToStandard(); popupState.close(); }}>Standard User</MenuItem>
              <MenuItem onClick={() => {changeToLow(); popupState.close(); }}>Low User</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>

      {showAlert && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          <AlertTitle>Success</AlertTitle>
          {alertMessage}
        </Alert>
      )}

      </div>
    </>
  )
}

export default UserPlan
