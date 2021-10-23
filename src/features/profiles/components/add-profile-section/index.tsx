import { useState } from "react";
import { connect } from "react-redux";
import AddProfileButton from '../add-profile-button';

export const AddProfileSection = ({ dispatch }) => {
    const [name, setName] = useState('');
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <AddProfileButton name={name}/>
        </div>
    )
}

export default connect()(AddProfileSection);