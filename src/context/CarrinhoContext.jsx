import { createContext } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
};
