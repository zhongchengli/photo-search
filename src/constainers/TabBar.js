import connect from "react-redux/lib/connect/connect"
import Tabs from "../components/Tags"
import { clickOnTag } from '../actions'

const mapStateToProps = () => { }
const mapDispatchToProps = dispatch => ({
  clickOnTag: tag => dispatch(clickOnTag(tag))
})
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
