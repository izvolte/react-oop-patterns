import React, { createContext, useContext, useState } from 'react'

interface State {
  value: string;
}

interface MediatorContextType {
  state: State;
  changeValue: (newValue: string) => void;
}

export const MediatorContext = createContext<MediatorContextType | undefined>(undefined);

interface MediatorProviderProps {
  children: React.ReactNode;
}

export const MediatorProvider = ({ children }: MediatorProviderProps) => {
  const [state, setState] = useState<State>({ value: 'initial' });

  const changeValue = (newValue: string) => {
    setState({ value: newValue });
  };

  return (
    <MediatorContext.Provider value={{ state, changeValue }}>
      {children}
    </MediatorContext.Provider>
  );
};


export const useMediator = () => {
  const context = useContext(MediatorContext);

  if (!context) {
    throw new Error('Component must be used within a MediatorProvider');
  }

  return context
};