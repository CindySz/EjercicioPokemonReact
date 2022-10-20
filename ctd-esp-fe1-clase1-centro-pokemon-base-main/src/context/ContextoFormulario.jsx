import { createContext, useReducer} from "react";

export const FormularioContext = createContext()

const initialValue=null;

const pokemonReducer=(state, action)=>{
    // const {payload}=action;
    // const key= Object.keys(payload)[0]
    // const value= Object.values(payload)[0]
    // console.log(payload);
    // console.log(action.type);

    switch (action.type) {
        case "ACTUALIZAR_ENTRENADOR":
            return {...state, data: action.payload}
          

            case "ACTUALIZAR_POKEMON":

            return{...state, data: action.payload}       
    
        default:
            break;
    }

}



export const FormularioProvider = ({ children }) => {
    // const [display, setDisplay] = useState({})

  const[store, dispatch]=useReducer(pokemonReducer, initialValue)

    return (
        <FormularioContext.Provider value={{store, dispatch}}>
            {children}
        </FormularioContext.Provider>
    )
}
