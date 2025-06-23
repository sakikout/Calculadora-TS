import React,
{
    createContext,
    useContext,
    useCallback,
    useState,
} from 'react';

interface InputContextData{
    history: string[];
    addToHistory(entry: string): void;
    clearHistory(): void;
    addFirstNumber(firstNumber: string): void;
    firstNumber: string;
    changeOperator(operator: string): void;
    operator: string;
    addSecondNumber(secondNumber: string): void;
    secondNumber: string;
}

const InputContext = createContext<InputContextData>({} as InputContextData);

const InputProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [history, setHistory] = useState<string[]>([]);
    const [firstNumber, setFirstNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const addFirstNumber = useCallback((firstNumber: string) => {
        setFirstNumber(firstNumber);
      },
    []);
    const changeOperator = useCallback((operator: string) => {
        setOperator(operator);
      },
    []);
      const addSecondNumber = useCallback((secondNumber: string) => {
        setSecondNumber(secondNumber);
      },
    []);

    const addToHistory = useCallback((entry: string) => {
        setHistory((prev) => [...prev, entry]);
    }, []);

    const clearHistory = useCallback(() => {
        setHistory([]);
    }, []);
    
    return(
        <InputContext.Provider
            value={{
            addFirstNumber,
            firstNumber,
            changeOperator,
            operator,
            addSecondNumber,
            secondNumber,
            history,
            addToHistory,
            clearHistory,
            }}
        >
            {children}
        </InputContext.Provider>
    );
};

function useInput(): InputContextData {
    const context = useContext(InputContext);

    if(!context){
        throw new Error('useInput must be used whitin a InputProvider');
    }
    return context;
}

export { InputProvider, useInput };