import config from '../Constants/configServer'
import axios from 'axios';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class _endpoint {
    static Send = 'form/';
}

export default class SendService {

    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    static async postUsers(body) {
        try {
            console.log(body)
            const result = await axios.post(`${config.URL}${_endpoint.Send}`, body);

            if (result.status === 200) {
                this.props.history.push('/');
            }
        } catch (e) {
            console.log(e)
            return e
        }
    }
}
