import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import List from 'quill/formats/list';
import ListItem from 'quill/formats/list';

Quill.register({
    'modules/toolbar': Toolbar,
    'themes/snow': Snow,
    'formats/bold': Bold,
    'formats/italic': Italic,
    'formats/header': Header,
    'formats/list': List,
    'formats/list-item': ListItem,
});

console.log('Starting Quill');
var quill = new Quill('#quill', { theme: 'snow' });

export default Quill;
