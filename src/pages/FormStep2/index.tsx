import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import {useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }        
    });

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step3');
        } else {
            alert("Preencha os dados.");
        }        
    }  
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual é seu nível na programação?</h1>
                <p>Escolha a melhor opção que condiz com seu conhecimento atual.</p>                
                <hr />
                <SelectOption 
                    title="Sou junior"
                    description="Comecei a programar há menos de 1 ano"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />
                <SelectOption 
                    title="Sou programador"
                    description="Comecei a programar há mais de 3 anos"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                /> 
                <Link to="/" className="backButton">Voltar</Link>               
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}