import _join from 'lodash-es/join';
import write from './common/write';

write(
    _join(
        [
            '<h1>',
            'Hi!',
            'I am a web application!',
            'And my bundle built by webpack.',
            'And css also built by webpack',
            '</h1>'
        ],
        '<br>'
    )
);
write('<hr>');
