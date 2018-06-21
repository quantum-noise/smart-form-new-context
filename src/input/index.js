import React from 'react';
import {smartInputCreator} from './smartInputCreator';

export const SmartInput = {
    Text: smartInputCreator((props) => <input type="text" {...props} />),
    Password: smartInputCreator((props) => <input type="password" {...props} />),
};
