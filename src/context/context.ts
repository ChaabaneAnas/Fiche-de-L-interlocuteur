import { createContext } from 'react';
import {  stateInterface } from '../GlobalTypes';

export const Context = createContext<stateInterface | null>(null);
