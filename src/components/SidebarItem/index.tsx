import { Link } from 'react-router-dom';
import * as C from './styles';
import   Profile  from '../../assets/profile.svg';
import   Book  from '../../assets/book.svg';
import   Mail  from '../../assets/mail.svg';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({title, description, icon, path, active}: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <C.Img src={Profile} alt="Profile" />
                    }
                    {icon === 'book' &&
                        <C.Img src={Book} alt="Book" />
                    }
                    {icon === 'mail' &&
                        <C.Img src={Mail} alt="Mail" />
                    }                    
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}