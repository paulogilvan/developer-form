import { Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';

export const FormStep1 = () => {
    return (
        <Theme>
            <C.Container>
                Passo 1
                <Link to="/step2">Step2</Link>
            </C.Container>
        </Theme>
    );
}