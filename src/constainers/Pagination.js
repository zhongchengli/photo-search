import connect from "react-redux/lib/connect/connect"
import Pagination from "../components/pagination/Pagination"

const mapStateToProps = state => ({
  totalPages: state.totalPages,
  currentPage: state.currentPage
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(Pagination)