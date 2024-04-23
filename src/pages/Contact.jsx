import { Link } from "react-router-dom"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const Contact = () => {
  return (
    <div className="page">
        <Link to='/'><KeyboardReturnIcon /></Link>
        This app was designed and developed by Alice Kim.
        Any feedback is welcomed via <a href="https://www.linkedin.com/in/alice-heeyeon-kim/" className="linkedin"> linkedIn</a>.
        
    </div>
  )
}

export default Contact
