import { connect } from "react-redux"
import { addProfile } from '../../../../store/features/user/user-slice'
const AddProfileButton = ({ name, dispatch }) => {
    const onClick = () => {
        const newProfile = {
            id: 0,
            name,
            imageUrl: ''
        };
        dispatch(addProfile(newProfile));
    }
    return (
        <button onClick={onClick}>
            Add
        </button>
    )
}

export default connect()(AddProfileButton);
