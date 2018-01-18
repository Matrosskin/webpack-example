import _ from 'lodash';
import write from './common/write';

write(
    _.join(
        [
            '<h1>',
            'Hi!',
            'I am a web application!',
            'And my bundle built by webpack.',
            '</h1>'
        ],
        '<br>'
    )
);
write('<hr>');
