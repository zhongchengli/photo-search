import connect from "react-redux/lib/connect/connect"
import { Photos } from "../component/Photos"

const mapStateToProps = state => ({
  photos: state.photos
})

export default connect(mapStateToProps)(Photos)